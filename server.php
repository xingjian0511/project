<?php
    $storge = array
    (
    array("name","phone","engine","size","wheel","Body Color","Wheel Color"),
    );
    $order=$_REQUEST["order"];
    array_push($storge,$order);
    //for ($i = 0; $i <= 1; $i++) {
    //    for($j = 0; $j <= 7; $j++){
    //        echo $storge[i][j];
    //    }
    //    echo "<br>";
    //} 
    echo count($order);
    //echo count($order);
    //if ($bodyColor != "Blue" || $wheelColor != "Blue"){
    //    sleep(10);
    //}
    //Sending parts to painter in Owens Crossroad, Alabama
?>