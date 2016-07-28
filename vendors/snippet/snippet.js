/**
 * Created by avsapronov on 28.07.2016.
 */

$(document).ready(function(){
	$("pre.htmlCode").snippet("html",{style:"acid"});
	// Ищем тэги <pre> с классом "htmlCode"
	// и подключаем к этим элементам стиль acid и обработку html
	$("pre.styles").snippet("css",{style:"acid"});
	// Ищем тэги <pre> с классом "styles"
	// и подключаем к этим элементам стиль acid и обработку для CSS кода
	
	$("pre.js").snippet("javascript",{style:"acid"});
	// Ищем тэги <pre> с классом "js"
	// и подключаем к этим элементам стиль acid и обработку для
});
