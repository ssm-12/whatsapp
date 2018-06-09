$(document).ready(function() {
    $("#btnUnread").click(function(){
        $("#unread1, #unread2, #unread3, #unread4").removeClass("d-none");
        $("#leftPanel").removeClass("d-none");
        $("#leftProfilePanel").addClass("d-none");
    });

    $("#btnMainPage").click(function(){
        $("#unread1, #unread2, #unread3, #unread4").addClass("d-none");
        $("#chatMessages").addClass("d-none");
        $("#leftPanel").removeClass("d-none");
        $("#leftProfilePanel").addClass("d-none");
    });

    $("#btnChatPage").click(function(){
        $("#chatMessages").removeClass("d-none");
        $("#leftProfilePanel").addClass("d-none");
    });

    $("#btnProfilePage").click(function(){
        $("#leftPanel").toggleClass("d-none");
        $("#leftProfilePanel").toggleClass("d-none");
    });

    $("#goBack").click(function(){
    	$("#leftPanel").removeClass("d-none");
        $("#leftProfilePanel").addClass("d-none");
    });
});
