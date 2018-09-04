$(document).ready(function() {


$('#form_firstname').on('input', function() {
});

$('#form_firstname').on('input', function() {
	var input=$(this);
	var is_name=input.val();
	if(is_name){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});

$('#form_lastname').on('input', function() {
});

$('#form_lastname').on('input', function() {
	var input=$(this);
	var is_name=input.val();
	if(is_name){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});


$('#form_email').on('input', function() {
});


$('#form_email').on('input', function() {
	var input=$(this);
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input.val());
	if(is_email){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});


$("#submit button").click(function(event){
}); 

$("#submit button").click(function(event){
	var form_data=$("#form").serializeArray();
	var error_free=true;
	for (var input in form_data){
        var element=$("#form_"+form_data[input]['firstname']);
        var element=$("#form_"+form_data[input]['lastname']);
        var element=$("#form_"+form_data[input]['email']);
		var valid=element.hasClass("valid");
		var error_element=$("span", element.parent());
		if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
		else{error_element.removeClass("error_show").addClass("error");}
	}
	if (!error_free){
        event.preventDefault(); 
        alert('No errors: Form will be submitted');
	}
	else{
		alert('Error: Form incomplete');
	}
});



});

