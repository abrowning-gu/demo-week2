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
            if (response.valid == true){
              console.log("good");
              $("#result").html("We got a response: " + response.data);
             
                
            }else{
              $("#result").html("We got an invalid response.");
            }
     
        },
        error : function(e) {
          alert("Error!")
          console.log("ERROR: ", e);
        }
      });


   }

});