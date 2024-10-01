const {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction
} = require('@solana/web3.js');
const bs58 = require('bs58');

// Replace with your Base58 private key (from Phantom export)
const base58PrivateKey = "2d8wr3wSgeZLewct4FmQkdJ25oLqHJz3EiBtqsfBu1demL8LVE1j7Yg3EkZxYf1a5147cxVuFwEpvj22UbT1zzc4";

// Convert Base58 private key to Uint8Array
const senderSecretKey = bs58.decode(base58PrivateKey);

// Replace with the recipient public key (wallet address)
const receiverPublicKey = new PublicKey("CgfYtmjEUBwjoqx2s9wQAtfe2jtW5eDEpx62h1Tvm9gC");

async function handleWin(winnerIndex) {
  console.log(`Winner is Player ${winnerIndex + 1}. Executing transfer...`);

  // Create a connection to Solana Devnet
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");

  // Load the sender account from the converted secret key
  const senderKeypair = Keypair.fromSecretKey(senderSecretKey);

  // Define the amount to send (e.g., 1 SOL)
  const amount = 1 * LAMPORTS_PER_SOL;

  // Create a transaction to transfer SOL
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: senderKeypair.publicKey,
      toPubkey: receiverPublicKey,
      lamports: amount,
    })
  );

  // Send and confirm the transaction
  try {
    const signature = await sendAndConfirmTransaction(
      connection,
      transaction,
      [senderKeypair]
    );
    console.log("Transaction successful with signature:", signature);
  } catch (error) {
    console.error("Transaction failed:", error);
  }
}

module.exports = { handleWin };
