<html>
    <head>
        <title>Exemplo POST</title>
    </head>
    <body>
    <form method="post" action="enviap.php">
        <label> Nome:</label>
        <input type="text" name="nome">
        <br>
        <input type="submit" value="Enviar">
        </form>

        <?php
            if(!empty($_POST)){
                echo $_POST["nome"];
            }else {
                echo "Nada foi Enviado";
            }
        ?>
    </body>
</html>