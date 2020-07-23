// THE LIFECYCLE OF CLOTHING 

//intro page appears, includes a paragraph about the decomposition of articles of clothing, user clicks on "get started" button to load the next page
//baseline page includes three items, each with a toggle button (set to off)
//event listener listens for user to toggle on or off each of the three items in the list (checkbox).

//when an item in the list is checked (toggled on), display the data on the page in text format.
//if the item is unchecked (toggled off), remove the corresponding text from the page.
//if a second item is toggled on, add the corresponding data to the page in text format.
//if a third item is toggled on, add the third item to the page in text format.

//reset button - if the user clicks the reset button, return all of the toggles back to off and remove all data from the page.

//Document ready: 
$(function () {
   $('#switch1').change(function () {
    console.log('here');
    if ($(this).is(':checked')) {
      console.log('box is 1 checked');
    }
    else {
      console.log('box is 1 NOT checked');
    }
  });

  $('#switch2').change(function () {
    console.log('here');
    if ($(this).is(':checked')) {
      console.log('box 2 is checked');
    }
    else {
      console.log('box 2 is NOT checked');
    }
  });

  $('#switch3').change(function () {
    console.log('here');
    if ($(this).is(':checked')) {
      console.log('box 3 is checked');
    }
    else {
      console.log('box 3 is NOT checked');
    }
  });
  
 });