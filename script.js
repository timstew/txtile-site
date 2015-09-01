$(document).ready(function() {
  $('form').ajaxChimp({
    callback: function(response) {
      $('#myForm').hide();
      $('.checkmark').show();
      $('form .result').text(response.msg);
    }
  });
});