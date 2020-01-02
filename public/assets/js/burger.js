$(function() {
    $(".devourer").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id);
        alert("You clicked me");
        console.log(this)
        
    });
});