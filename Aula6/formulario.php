<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>teste de php</title>
</head>
<body>
    <header>
        <main>
            <?php
                $nome = $_GET["name"];
                $sobrenome = $_GET["sobrenome"];

                echo("Seja bem vindo $nome $sobrenome!")
            ?> <br>
           <p><a href="index.html">Voltar</a></p>
        </main>
    </header>
</body>
</html>