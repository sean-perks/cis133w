<?php
	$url = isset($_GET['url']) ? $_GET['url'] : "http://eloquentjavascript.net/";
	$contents = base64_encode(mb_convert_encoding(file_get_contents($url), "HTML-ENTITIES", "UTF-8"));
?>


<!doctype html>

<html>
	<head>
		<title>Fetch Page</title>
		
		<script src="fetch_page.js"></script>
		<script>
			var BASE = <?php echo json_encode($url); ?>;
			var PAGE = <?php echo json_encode($contents); ?>;
		</script>
	</head>
	
	<body>
	
		<div id="searchBox">searchy</div>
		<div id="tocContainer">
			<div id="toc">toc</div>
		</div>
		<div id="contents"></div>
		
	</body>
</html>