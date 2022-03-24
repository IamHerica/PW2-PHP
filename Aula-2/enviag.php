<html>
    <head>
        <title>Exemplo GET</title>
    </head>
    <body>
    <form method="get" action="enviag.php">
        <label> Nome:</label>
        <input type="text" name="nome">
        <br>
        <input type="submit" value="Enviar">
        </form>

        <?php
            if(!empty($_GET)){
                echo $_GET["nome"];
            }else {
                echo "Nada foi Enviado";
            }
        ?>
    </body>
</html>