const WebSocket = require('ws');
const { handleWin } = require('./transfer'); // Import the handleWin function

// Start WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

let players = [];
let currentTurn = 0; // 0: Player 1's turn, 1: Player 2's turn
let playerHealths = [100, 100]; // [Player 1 health, Player 2 health]

// Broadcast a message to all connected players
function broadcast(data) {
  players.forEach(player => {
    if (player.readyState === WebSocket.OPEN) {
      player.send(JSON.stringify(data));
    }
  });
}

// Reset the game
function resetGame() {
  playerHealths = [100, 100];  // Reset health
  currentTurn = 0;             // Reset turn to Player 1

  // Inform all players about the reset
  broadcast({
    type: 'reset',
    healths: playerHealths,
    currentTurn,
  });
}

// Handle new player connections
wss.on('connection', (ws) => {
  if (players.length >= 2) {
    ws.send(JSON.stringify({ message: 'Game is full' }));
    ws.close();
    return;
  }

  players.push(ws);
  const playerIndex = players.length - 1;

  ws.send(JSON.stringify({
    message: 'Connected',
    playerIndex,
    healths: playerHealths,
    currentTurn
  }));

  ws.on('message', (message) => {
    const data = JSON.parse(message);

    if (data.type === 'attack' && playerIndex === currentTurn) {
      const opponentIndex = playerIndex === 0 ? 1 : 0;
      playerHealths[opponentIndex] -= data.damage;
      currentTurn = opponentIndex;

      // Broadcast the updated health and turn to both players
      broadcast({
        type: 'update',
        healths: playerHealths,
        currentTurn,
      });

      // Check for win condition
      if (playerHealths[opponentIndex] <= 0) {
        broadcast({
          type: 'win',
          winner: playerIndex
        });

        // Call handleWin when the game ends
        handleWin(playerIndex);  // Trigger the Solana transfer based on the winner

        // Reset the game after 5 seconds
        setTimeout(resetGame, 5000);
      }
    }
  });

  ws.on('close', () => {
    players = players.filter(player => player !== ws);
  });
});
