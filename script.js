

$(document).ready(function() {

/*variables for new label*/
	var $form = $(".book-properties");
	var $name = $(".name");
	var $class = $(".class");
	var $semester = $(".semester");
	var $school = $(".school");
	var $subject = $(".subject");
	var $method = $(".method");
	var $sort = $(".sort"); 
	var $affix = $(".add");
	
	$form.on("submit", function(e){
		e.preventDefault();
		
		
		var $label = $("<a href='#' class='default-label col-xs-3'>");
		var $subjectH2 = $("<h2>").html($subject.val());
		var $methodH3 = $("<h3>").html($method.val());
		var $sortH1 = $("<h1>").html($sort.val() + " " + $affix.val());
		var $userP = $("<p>").html($name.val() + "<br>" + $class.val() + " - " + $semester.val() + "<br>" + $school.val() );
		
		
		$label.append($subjectH2).append($methodH3).append($sortH1).append($userP);
		$label.prependTo($("#labels"));
	
		$(".default-label").click(function(){
			$(this).remove();
		});
	
	});



});
	
	