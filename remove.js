var remover = function(){
	(".default-label").hover(
		function(){
			$(this).wrap("<div class="remove"><img src="Assets/remove.png"/></div>");
		},function(){
			$(this).unwrap("<div class='remove'><img src='Assets/remove.png'/></div>");
		});
};

$(document).ready(remover);
