$(document).ready(function() {
    $("#btnUnread").click(function(){
    	if($(window).width()>768)
    	{
    		$("#rightPanel").removeClass("d-none");
    	}
        $("#unread1, #unread2, #unread3, #unread4").removeClass("d-none");
        $("#leftPanel").removeClass("d-none");
        $("#leftProfilePanel").addClass("d-none");
    });

    $("#btnMainPage").click(function(){
    	if($(window).width()>768)
    	{
    		$("#rightPanel").removeClass("d-none");

    		$("#rightPanel").removeClass("col-md-12 col-lg-12");
    		$("#rightPanel").addClass("col-md-7 col-lg-8 d-none d-md-block d-lg-block");	
    		$("#leftPanel").removeClass("d-none");
    		$("#chatMessages").addClass("d-none");
    	}
        $("#unread1, #unread2, #unread3, #unread4").addClass("d-none");
        $("#chatMessages").addClass("d-none");
        $("#leftPanel").removeClass("d-none");
        $("#leftProfilePanel").addClass("d-none");
    });

    $("#btnChatPage").click(function(){
    	if($(window).width()<768)
    	{
	    	$("#leftPanel").addClass("d-none");
	    	$("#chatMessages").removeClass("d-none");
	    	$("#rightPanel").removeClass("col-md-7 col-lg-8 d-none d-md-block d-lg-block");
	    	$("#rightPanel").addClass("col-md-12 col-lg-12");
    	}
    	else
    	{
    		$("#leftPanel").removeClass("d-none");
	        $("#chatMessages").removeClass("d-none");
	        $("#leftProfilePanel").addClass("d-none");
    	}
    });

    $("#btnProfilePage").click(function(){
    	if($(window).width()<768)
    	{
    		$("#rightPanel").addClass("d-none");
    	}
        $("#leftPanel").addClass("d-none");
        $("#leftProfilePanel").removeClass("d-none");
    });

    $("#goBack").click(function(){
    	$("#leftPanel").removeClass("d-none");
        $("#leftProfilePanel").addClass("d-none");
    });

    $(".openChat").click(function(){
    	// $("#leftProfilePanel").addClass("d-none");
    	if($(window).width()<768)
    	{
	    	$("#leftPanel").addClass("d-none");
	    	$("#leftProfilePanel").addClass("d-none");
	    	$("#chatMessages").removeClass("d-none");
	    	$("#rightPanel").removeClass("col-md-7 col-lg-8 d-none d-md-block d-lg-block");
	    	$("#rightPanel").addClass("col-md-12 col-lg-12");
    	}
    	else
    	{
    		$("#rightPanel").removeClass("col-md-12 col-lg-12");
    		$("#rightPanel").addClass("col-md-7 col-lg-8 d-none d-md-block d-lg-block");
    		$("#leftPanel").removeClass("d-none");
    		$("#leftProfilePanel").addClass("d-none");
	        $("#chatMessages").removeClass("d-none");
	        $("#leftProfilePanel").addClass("d-none");
    	}
    });

    $("#closeChatWindow").click(function(){
    	if($(window).width()<768)
    	{
	    	$("#leftPanel").removeClass("d-none");
	    	$("#chatMessages").addClass("d-none");
	    	$("#rightPanel").removeClass("col-md-12 col-lg-12");
	    	$("#rightPanel").addClass("col-md-7 col-lg-8 d-none d-md-block d-lg-block");
    	}
    	else
    	{
    		$("#rightPanel").removeClass("col-md-12 col-lg-12");
    		$("#rightPanel").addClass("col-md-7 col-lg-8 d-none d-md-block d-lg-block");	
    		$("#leftPanel").removeClass("d-none");
    		$("#chatMessages").addClass("d-none");
    	}
    });
});
