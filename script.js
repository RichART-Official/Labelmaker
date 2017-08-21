

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

	function ADD_label(){
		var $label = $("<a href='#' class='default-label col-xs-3'>");
		var $subjectH2 = $("<h2>").html($subject.val());
		var $methodH3 = $("<h3>").html($method.val());
		var $sortH1 = $("<h1>").html($sort.val() + " " + $affix.val());
		var $userP = $("<p>").html($name.val() + "<br>" + $class.val() + " - " + $semester.val() + "<br>" + $school.val() );

		$label.append($subjectH2).append($methodH3).append($sortH1).append($userP);
		$label.prependTo($("#labels"));
	}
	function DELETE_label(){
		var CHECK_selected = $("#label").children("a").length;
		if( $(CHECK_selected != 0)) {
			$("#delete-btn").removeAttr( "disabled" );
		} else {
			$("#delete-btn").addAttr( "disabled" );
		}
	}

	$form.on("submit", function(e){
		e.preventDefault();
		ADD_label();
	});

	$(document).on("click", ".default-label", function(){
		var check = $(this).hasClass("selected");

		if(check) {
			$(this).removeClass("selected");
			DELETE_label()
		} else {
			$(this).addClass("selected");
			DELETE_label()
		}
	});

	$(document).on("click", ".default-label > h2, h3, h1, p", function(e){
		var OLD_data = $(this).text();
		var NEW_data = prompt("Aanpassen", OLD_data);
		if(NEW_data.length != 0){
			$(this).text(NEW_data);
		} else {
			return;
		}
	});


	$("#delete-btn").click(function(){
		$("#labels").find(".selected").remove();
	})

	$("#add-btn-mobile").click(function(){
		console.log("#add-btn-mobile clicked!");
		var check = $(".shell").hasClass("active");
		if(check) {
			$(".shell").removeClass("active");
			$("#add-btn-mobile").removeClass("add-btn-mobile-active");

		} else {
			$(".shell").addClass("active");
			$("#add-btn-mobile").addClass("add-btn-mobile-active");
		}
	});


});
