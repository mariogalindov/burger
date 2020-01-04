$(function() {
    $(".devourer").on("click", function(event) {
        var id = $(this).data("id");
        var dev = $(this).data("devoured")

        var newDevouredState = {
          devoured: dev
        }

        console.log(id);
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

    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burgui").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});