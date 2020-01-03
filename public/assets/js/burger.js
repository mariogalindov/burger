$(function() {
    $(".devourer").on("click", function(event) {
        var id = $(this).data("id");
        var dev = $(this).data("devoured")

        var newDevouredState = {
          devoured: dev
        }

        console.log(id);
        alert("You clicked me");
        console.log(this);


            // Send the PUT request.
    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devouredState to...");
          // Reload the page to get the updated list
          location.reload();
        }
      );
        
    });
});