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
	$fx_name1 = explode("&",$fx_name)[0]; // remove "fx=" and "&lang=..
	if(substr($fx_name1,0,3)=="fx=") $fx_name1=substr($fx_name1,3);
        $fp=fopen($fx_name1,"w");
        fwrite($fp,$_POST["fx"]);
        fclose($fp);
        chdir("..");
        echo '<meta http-equiv="Refresh" content="0; url=bpnaf5.html?fx='.$fx_name0.'"/>';
    }   
} else {
    echo '
<html>
<title>BPNAF Admin</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
<style>
	a {
		text-decoration: none;
	}
</style>

<script src="bpnaf.js"></script>
<body>
';

/*
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

//echo 'fx = '.$_GET["fx"].'<br>';
//if($_GET["fx"]==".") echo 'true<br>';

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

*/

echo '
<div class="container">
	<p><br></p>
	<div class="mt-4 p-5 bg-gradient1 bg-light1" style="background-color1:#9e7ba8;margin-top:0!important;background-image:linear-gradient(to top,#e6ffe6,white,white,#b7d9fe)">
		<center>
			<h1 id="banner">
				<a id="t_title" href="bpnaf5.html" class="text-white1">
					Business Process Nature Assessment Framework
				</a>
			</h1>
		</center>
	</div>
	<p></p>
	<div class="row">				
		<div class="container">
			<ul id="tabA" class="nav nav-tabs nav-pills">
';

if($dh = opendir("dat")){
	while (($file = readdir($dh)) !== false) {
		if(strpos($file,".tsv")!==false) {
			// echo '<li><a href="bpnaf5.html?fx='.$file.'">'. $file . "</a></li>";
			if(strpos($file,"bpnaf_")!==false) {
				$id = substr($file,6,-4);
				echo '<li class="nav-item"><a href="#tabPane" id="'.$file.'" class="nav-link" data-bs-toggle="tab">'.$id.'</a></li>';
			}
		}
    }
    closedir($dh);
}
					
echo ' 
			</ul>
		</div>
		<p></p>
		<div id="tabsA_c" class="tab-content">
			<div id="tabPane" class="tab-pane fade in show active">
				<div id="tabA3_c" class="container">
						<div style="height:310px">
							<textarea disabled id=\'ex7\' name="fx" wrap="off" rows=12 style="width:100%;font-family:Consolas,monospace" placeholder="Select tab above to see the internal content and then 
select title text in the banner to see the questionnaire"></textarea>
						</div>			
				</div>
			</div>
		</div>
	</div>
</div>

<script>
	var datapath="dat/";

	async function load_serverfile(file) {  // using fetch  (inserting datapath)
		var url = datapath + file;
		var response = await fetch(url,{cache: "reload"});
		var pr = await response.text();
		console.log("load_serverfile: "+pr);
		//bpnaf5[file]=pr;
		//localStorage.bpnaf5=JSON.stringify(bpnaf5);
		return(pr);
	}

	var ee = document.querySelectorAll(".nav-link");
	ee.forEach(elem => elem.addEventListener("show.bs.tab", function(e) {
	    e.preventDefault();
	    var el=document.getElementById("ex7");
		if(el) load_serverfile(e.target.id).then(s=>{
			console.log("then: "+s);
			el.value = s;
			var a=document.getElementById("t_title");
			if(a) {
				a.href="bpnaf5.html?fx="+e.target.id;
			}
		});
	}))

</script>

';
 
}
?>
