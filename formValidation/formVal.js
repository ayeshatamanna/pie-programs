// Waiting for the DOM to be ready
$(function() {
  // Initializing form validation on the registration form.
  $("form[name='Registration']").validate({
    // Specifing validation rules
        rules: {
      		name: "required",
      		email: {
        		required: true,
        		email: true
      },
      		gender: "required",
      		date: "required",
      		blood: "required",
      		degree: "required",
      		fileToUpload: "required"

    },
    // Specify validation error messages
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email address",
      gender: "Please choose a gender",
      date: "Please choose a date",
      blood: "Please choose a blood",
      degree: "Please choose a degree",
      fileToUpload: "Please choose a photo"
    },

    errorPlacement: function(error, element) 
        {
            if ( element.is(":radio") )
            {
                error.appendTo( element.parents('.container') );
            }
            else 
            { 
                error.insertAfter( element );
            }
         },

    submitHandler: function(form) {
      form.submit();
    }
  });

  $( "#name" ).autocomplete({
      source: nameList
    });

  $( "#datepicker" ).datepicker();

  $( "input[type=radio], input[type=checkbox]" ).checkboxradio();

  $( "#blood-type" ).controlgroup();

  $( ".widget input[type=reset], .widget button" ).button();
  $( "button, input" ).click( function( event ) {
      event.preventDefault();
    } );

});