// check off specific todos by clicking
$("ul").on("click","li",function(){
/*
*** longer Version***

if($(this).css("color")==="rgb(128, 128, 128)"){
	$(this).css({
	color: "black",
	textDecoration: "none"
});
}
else{
$(this).css({
	color: "gray",
	textDecoration: "line-through"



});

}
*/

$(this).toggleClass("completed");
});

// Click on X to delete todo

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();	
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){

if(event.which === 13){
	// grabbing new todo text from input
	var todoText = $(this).val();
	$(this).val(" ");
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
}

});

$(".fa-plus").click(function(){
$("input[type='text'").fadeToggle();

});