<?php 
if(array_key_exists("ex",$_POST)) {
    $example = array_key_exists("ex_name",$_POST)?$_POST["ex_name"]:"example5";
    $fp=fopen("bpnaf.js","a");
    fwrite($fp,"var ".$example."=`".$_POST["ex"]."`;\n");
    fclose($fp);
    echo '<meta http-equiv="Refresh" content="0; url=bpnaf5.html?ex='.$example.'" />';
} else if(array_key_exists("fx",$_POST)||array_key_exists("fx",$_GET)) {
    if( $_REQUEST["fx"]=='.' ) {
        if($dh = opendir("dat")){
              while (($file = readdir($dh)) !== false){
                 echo $file . "\n";
              }
              closedir($dh);
        }
    } else {
        $fx_name = array_key_exists("fx_name",$_POST)?$_POST["fx_name"]:"bpnaf_default.tsv";
        if(!file_exists("dat")) mkdir("dat");
        chdir("dat");
	$fx_name0 = $fx_name;
	if(substr($fx_name,0,2)=="uu") {
		$fx_name = urldecode(base64_decode(substr($fx_name,2)));
	}
	$fx_name1 = substr(explode("&",$fx_name)[0],3); // remove "fx=" and "&lang=..
        $fp=fopen($fx_name1,"w");
        fwrite($fp,$_POST["fx"]);
        fclose($fp);
        chdir("..");
        echo '<meta http-equiv="Refresh" content="0; url=bpnaf5.html?fx='.$fx_name0.'"/>';
    }   
} else {
    echo '
<html>
<script src="bpnaf.js"></script>
<body>
<center>
<h1>
  <a href="bpnaf5.html" style="text-decoration:none">
    Business Process Nature Assessment Framework
  </a>
</h1>
</center>

<p><font size="+1">
The form for defining BPNAF questionnaire:
</font>
</p>

<form id="f1" action="bpnaf.php" method="post">
<textarea id="ex" name="ex" wrap="off" rows=10 
style="width:100%;font-family:Consolas,monospace;font-size:14pt">#;MyCompany;Me
M1.1;;Process 1
M1.2;;Process 2
M1.3;;Process 3
C1.1;;Process 4
S1.3;;Process 5
S1.4;;Process 6
</textarea>
<input type="submit" style="font-size:14pt">
</form>	

</body>
</html>
    ';

echo 'fx = '.$_GET["fx"].'<br>';
if($_GET["fx"]==".") echo 'true<br>';

echo '<p><font size="+1">Questionnaires:</font></p><ol>';
    if($dh = opendir("dat")){
        while (($file = readdir($dh)) !== false) {
            if(strpos($file,".tsv")!==false) {
                echo '<li><a href="bpnaf5.html?fx='.$file.'">'. $file . "</a></li>";
            }
        }
        closedir($dh);
    }
echo '</ol><br>';
 
}
?>
