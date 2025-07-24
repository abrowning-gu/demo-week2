$(document).ready(function() {
    $("#dataform").submit(function(event){
      event.preventDefault();
      ajaxPost();
    });

    function ajaxPost(){
      // Prepare Form Data from web form.
      var formData = {
        data : $("#data").val(),
        
      }
      $.ajax({ // DO AJAX POST
        type : "POST",
        contentType : "application/json",
        url : window.location + "api/dataform",
        data : JSON.stringify(formData),
        dataType : 'json',
        success : function(response) {
          //What happens when a successful response comes back from the server.
            if (response.valid == true){
              $("#result").html("We got a response: " + response.data); 
            }else{
              $("#result").html("We got an invalid response.");
            }
        },
        error : function(e) {
          //What happens if an error occurs with the AJAX request.
          alert("Error!")
          console.log("ERROR: ", e);
        }
      });
   }
});