<!doctype html>

<html>
	<head>
		<title>Survey Response</title>
		<script>
			var ANSWERS = <?php echo urldecode($_POST['answers']); ?>;
			
			function buildResponseTable () {
				var result = "";
				
				result += "<table>\n";
				result += "<tr><th>Section</th><th>Questtion</th><th>Response</th><th>Value</th></ttr>\n";
				
				for (section in ANSWERS) {
					for (question in ANSWERS[section]) {
						for (response in ANSWERS[section][question])	{
							result += "<tr><td>" + section + "</td>";
							result += "<td>" + question + "</td>";
							result += "<td>" + response + "</td>";
							result += ANSWERS[section[question][response];
							result += "</td></tr>\n";
						}
					}
				}
				result += "</table>";
				document.getElementById('responseTable').innerHTML = result;
			}
			window.addEventListener("load", buildResponseTable);

		</script>
	</head>
	<body>
		<h1>Results</h1>
		<p>Summary</p>	
		<div id="responseTable"></div>
	</body>
</html>