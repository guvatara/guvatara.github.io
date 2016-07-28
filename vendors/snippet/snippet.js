/**
 * Created by avsapronov on 28.07.2016.
 */

$(document).ready(function(){
	
	$("pre.html").snippet("html",{style:"acid"});
	// Finds <pre> elements with the class "htmlCode"
	// and snippet highlights the HTML code within.
	
	$("pre.css").snippet("css",{style:"acid"});
	// Finds <pre> elements with the class "styles"
	// and snippet highlights the CSS code within
	// using the "greenlcd" styling.
	
	$("pre.php").snippet("php",{style:"acid"});
	// Finds <pre> elements with the class "styles"
	// and snippet highlights the CSS code within
	// using the "greenlcd" styling.
	
	$("pre.js").snippet("javascript",{style:"acid"});
	// Finds <pre> elements with the class "js"
	// and snippet highlights the JAVASCRIPT code within
	// using a random style from the selection of 39
	// with a transparent background
	// without showing line numbers.
	
});
