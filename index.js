<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>S.P.I.K.E. - Login</title>
    <style>
        body {
            font-family: 'Arial', '04b';
            background-color: #1a1a1a;
            color: #fff;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: url('Images/LogIn_Background.png');
            background-size: cover; 
            background-position: center;
            background-repeat: no-repeat; 
        }

        .login-container {
            background-color: #2b2b2b;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
            width: 350px;
            background-image: url('Images/LogIn_UI.png');
            background-size: cover; 
            background-position: center;
            background-repeat: no-repeat; 
        }

        .login-container h2 {
            text-align: center;
            margin-bottom: 30px;
            font-size: 24px;
            color: #0b0802ae;
        }

        .login-container label {
            text-align: center;
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            color: #090505;
        }

        .login-container input[type="text"],
        .login-container input[type="password"] {
            width: 93%;
            padding: 12px;
            margin-bottom: 20px;
            border: none;
            border-radius: 20px;
            background-color: #3d3d3d;
            color: #0c0606;
            font-size: 16px;
            background-image: url('Images/LogIn_box.png'); 
            background-size: cover; 
            background-position: center;
            background-repeat: no-repeat; 
        }

        .login-container input[type="text"]::placeholder,
        .login-container input[type="password"]::placeholder {
            color: #b3b3b3;
        }

        .login-container button {
            width: 100%;
            padding: 12px;
            background-color: #c7881400;
            border: none;
            border-radius: 5px;
            color: #1a1a1a;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            background-image: url('Images/Battle\ Button.png');
            background-size: contain;
            background-position: center; 
            background-repeat: no-repeat; 
        }

        .login-container button:hover {
            transform: scale(1.2);
        }

        .login-container button:active {
            transform: scale(0.95);
        }

        .login-container p {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
        }

        .login-container p a {
            color: #1a1a1a;
            text-decoration: none;
        }

        .login-container p a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

    <div class="login-container">
        <h2>S.P.I.K.E.</h2>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Password</label>
        <input type="password" id="password" name="password" required>

        <button onclick="window.location.href='home.html';">Log In</button>
        <p>Don't have an account? <a href="signup.html">Sign up</a></p>
    </div>

</body>
</html>
