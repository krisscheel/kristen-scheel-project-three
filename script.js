// THE LIFECYCLE OF CLOTHING 

//Document ready: 
$(function () {
   $('#switch1').change(function () {
    if ($(this).is(':checked')) {
      $(".toggleVisibility1").show();
    }
    else {
      $(".toggleVisibility1").hide();
    }
  });

  $('#switch2').change(function () {
    console.log('here');
    if ($(this).is(':checked')) {
      $(".toggleVisibility2").show();
    }
    else {
      $(".toggleVisibility2").hide();
    }
  });

  $('#switch3').change(function () {
    console.log('here');
    if ($(this).is(':checked')) {
      $(".toggleVisibility3").show();
    }
    else {
      $(".toggleVisibility3").hide();
    }
  });

});