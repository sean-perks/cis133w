window.addEventListener('DOMContentLoaded', (function() {
	
	var contents;
	var protocol;
	var directory;
	var file;
	
	function parseBase() {
		var pos, slashPos;
		var remainder;
		
		pos = BASE.indexOf('://');
		protocol = BASE.substr(0, pos);
		remainder = BASE.substr(pos + 3);
		
		slashPos = remainder.indexOf('/');
		if (slashPos === -1) {
			hostname = remainder;
			directory = "";
			file = "";
			
		} else {
			hostname = remainder.substr(0, slashPos);
			remainder = remainder.substring(slashPos + 1);
			slashPos = remainder.lastIndexOf('/');
			if (slashPos === -1) {
				directory = "";
				file = remainder;
			} else {
				directory = remainder.substr(0, slashPos);
				file = remainder.substr(slashPos + 1);
			}
		}
		console.log(protocol);
		console.log(hostname);
		console.log(directory);
		console.log(file);
		
	}
	
	function relativeToAbsolute(url) {
		if (url.indexOf('://') > -1) {
			return url;
		} else if (url[0] ==='/') {
			return protocol +"://" + hostname + url;
		} else {
			if (directory === "") {
				return protocol +"://" + hostname + '/' + url;
			} else {
				return protocol + "://" + hostname + '/' + directory + "/" + url;
			}
		}
			
	}
	
	
	function parsePage() {
		var parser = new DOMParser();
		contents = parser.parseFromString(atob(PAGE), "text/html");

		

		console.log(contents);
	}
	
	function moveChildren(source, destination) {
		while (source.childNodes.length > 0) {
			var child = source.childNodes[0];
			source.removeChild(child);
			destination.appendChild(child);
		}
	}
	
	function moveContent() {
		moveChildren(contents.head, document.head);
		moveChildren(contents.body, document.getElementById('contents'));
	}
	
	return function() {
		parseBase();
		parsePage();
		moveContent();
		relativeToAbsolute();
	}
	
})());
