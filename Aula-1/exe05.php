<?php 
// $num1 = 3;
// $num2 = 4;
// $num3 = 24;
//imprimir 24 4 3


$num[0] = 3;
$num[1] = 24;
$num[2] = 4;


echo "Usando o método sort <br>"; 
 sort($num);
 for($i = 0; $i <= 2; $i++){
    echo $num[$i]." ";
}

 echo "Fazendo o método sort ao contrário <br>";
 for($i = 2; $i >= 0; $i--){
     echo $num[$i]." ";
 }

?>