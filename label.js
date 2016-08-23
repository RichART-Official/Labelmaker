$(document).ready(function() {
	if($(#submit).click(function(){
		var subject = document.getElementsByName("subject")[0].value;
		var method = document.getElementsByName("method")[0].value;
		var sort = document.getElementsByName("firstname")[0].value;
		var affix = document.getElementsByName("affix")[0].value;

		alert(subject);
	}));
});