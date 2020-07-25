// THE LIFECYCLE OF CLOTHING 

const myApp = {};

myApp.clothing = [
  {
    name: "denim jacket",
    minBreakdown: 10,
    maxBreadown: 12,
    checked: false
  },
  {
    name: "t-shirt",
    minBreakdown: 6,
    maxBreakdown: 6,
    checked: false
  },
  {
    name: "wool hat",
    minBreakdown: 12,
    maxBreakdown: 60,
    checked: false
  }
]

myApp.changeEvents = function () {
  $('#switch1').change(function () {
    const index = 0;
    if ($(this).is(':checked')) {
      $(".toggleVisibility1").show();
      $(".jacketBox").show();
      myApp.clothing[index].checked = true;
    }
    else {
      $(".toggleVisibility1").hide();
      $(".jacketBox").hide();
      myApp.clothing[index].checked = false;
    }
  });

  $('#switch2').change(function () {
    const index = 1;
    if ($(this).is(':checked')) {
      $(".toggleVisibility2").show();
      $(".tshirtBox").show();
      myApp.clothing[index].checked = true;
    }
    else {
      $(".toggleVisibility2").hide();
      $(".tshirtBox").hide();
      myApp.clothing[index].checked = false;
    }
  });

  $('#switch3').change(function () {
    const index = 2;
    if ($(this).is(':checked')) {
      $(".toggleVisibility3").show();
      $(".hatBox").show();
      myApp.clothing[index].checked = true;
    }
    else {
      $(".toggleVisibility3").hide();
      $(".hatBox").hide();
      myApp.clothing[index].checked = false;
    }
  });
}

//calculate totals function
myApp.calculateEvents = function () {
  $(".calculate").click(function () {
    let i;
    let sum = 0;
    //loop through the checked boxes, and add up the minimum breakdown times.
    for (i = 0; i < myApp.clothing.length; i++) {
      if (myApp.clothing[i].checked) {
        //find the minimum breakdown time in months
        sum = sum + myApp.clothing[i].minBreakdown;
      }
    }
    // take the time in months, and break it down into years and months
    if (sum <= 12) {
      $(".totalBox").html(`The minimun amount of time for the item(s) to decompose is ${sum} months.`);
    } else {
      const years = Math.floor(sum / 12);
      const monthRemain = sum % 12;
      // accomodating edits to the string depending on whether the answer is one year or multiple years
      let yearText = "";
      if (years == 1) {
        yearText = `${years} year`;
      } else {
        yearText = `${years} years`;
      }

      //accomodating for one month/multiple months in the text string.
      let monthText = "";
      if (monthRemain == 1) {
        monthText = `${monthRemain} month`;
      } else {
        monthText = `${monthRemain} months`;
      }

      $(".totalBox").html(`The minimum time for these items to decompose is ${yearText} and ${monthText}.`);

    }
  });
}

myApp.init = function () {
  myApp.changeEvents();
  myApp.calculateEvents();
}

//Document ready: 
$(function () {
  myApp.init();
});