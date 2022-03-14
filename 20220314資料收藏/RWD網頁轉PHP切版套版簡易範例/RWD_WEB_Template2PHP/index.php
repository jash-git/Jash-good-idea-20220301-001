<?php
include ('head.php');

if(isset($_GET["page"]))
{
	$page = $_GET['page'];	
}
else
{
	$page = -1;
}

switch($page)
{
	case 0:
		include ('index_body.php');
		break;
	case 1:
		include ('about_body.php');
		break;
	default: 
        include ('index_body.php');
}

include ('foot.php');
?>