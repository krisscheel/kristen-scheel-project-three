// THE LIFECYCLE OF CLOTHING 

const clothingArray = [
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

//Document ready: 
$(function () {
   $('#switch1').change(function () {
     const index = 0;
    if ($(this).is(':checked')) {
      //$(".toggleVisibility1").show();
      $(".jacketBox").show();
      clothingArray[index].checked = true;
    }
    else {
      //$(".toggleVisibility1").hide();
      $(".jacketBox").hide();
      clothingArray[index].checked = false;
    }
  });

  $('#switch2').change(function () {
    const index = 1;
    if ($(this).is(':checked')) {
      //$(".toggleVisibility2").show();
      $(".tshirtBox").show();
      clothingArray[index].checked = true;
    }
    else {
      //$(".toggleVisibility2").hide();
      $(".tshirtBox").hide();
      clothingArray[index].checked = false;
    }
  });

  $('#switch3').change(function () {
    const index = 2;
    if ($(this).is(':checked')) {
      //$(".toggleVisibility3").show();
      $(".hatBox").show();
      clothingArray[index].checked = true;
    }
    else {
      //$(".toggleVisibility3").hide();
      $(".hatBox").hide();
      clothingArray[index].checked = false;
    }
  });

//calculate totals function
  $(".calculate").click(function () {
    let i;
    let sum = 0;
    //loop through the checked boxes, and add up the minimum breakdown times.
    for (i = 0; i < clothingArray.length; i++) {
      if (clothingArray[i].checked) {
        //find the minimum breakdown time in months
        sum = sum + clothingArray[i].minBreakdown;
      }
    }
    // take the time in months, and break it down into years and months
    if (sum <= 12) {
      $(".totalBox").html(`The total is ${sum} months.`);
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
});