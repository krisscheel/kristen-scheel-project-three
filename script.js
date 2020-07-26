// THE LIFECYCLE OF CLOTHING 

const myApp = {};

myApp.clothing = [
  {
    name: "denim jacket",
    minBreakdown: 12,
    checked: false
  },
  {
    name: "t-shirt",
    minBreakdown: 6,
    checked: false
  },
  {
    name: "wool sweater",
    minBreakdown: 12,
    checked: false
  },
  {
    name: "canvas shoes",
    minBreakdown: 72,
    checked: false
  },
  {
    name: "silk dress",
    minBreakdown: 48,
    checked: false
  }
]

myApp.changeEvents = function () {
  $('#switch1').change(function () {
    const index = 0;
    if ($(this).is(':checked')) {
      $(".jacketBox").animate({'width': 'toggle', 'duration': 1000});
      $(".toggleVisibility1").show()
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
      $(".tshirtBox").animate({ 'width': 'toggle', 'duration': 1000 });
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
      $(".sweaterBox").animate({ 'width': 'toggle', 'duration': 1000 });
      myApp.clothing[index].checked = true;
    }
    else {
      $(".toggleVisibility3").hide();
      $(".sweaterBox").hide();
      myApp.clothing[index].checked = false;
    }
  });

  $('#switch4').change(function () {
    const index = 3;
    if ($(this).is(':checked')) {
      $(".toggleVisibility4").show();
      $(".canvasBox").animate({ 'width': 'toggle', 'duration': 1000 });
      myApp.clothing[index].checked = true;
    }
    else {
      $(".toggleVisibility4").hide();
      $(".canvasBox").hide();
      myApp.clothing[index].checked = false;
    }
  });

  $('#switch5').change(function () {
    const index = 4;
    if ($(this).is(':checked')) {
      $(".toggleVisibility5").show();
      $(".silkBox").animate({ 'width': 'toggle', 'duration': 1000 });
      myApp.clothing[index].checked = true;
    }
    else {
      $(".toggleVisibility5").hide();
      $(".silkBox").hide();
      myApp.clothing[index].checked = false;
    }
  });
}

myApp.changeEvents2 = function () {
  $('#switch11').change(function () {
    const index = 0;
    if ($(this).is(':checked')) {
      $(".colorBox1").fadeTo(2, 1);
      $(".toggleVisibility11").fadeTo(2, 1);
      myApp.clothing[index].checked = true;
    }
    else {
      $(".toggleVisibility11").hide();
      $(".colorBox1").fadeTo(2, 0);
      myApp.clothing[index].checked = false;
    }
  });

  $('#switch22').change(function () {
    const index = 1;
    if ($(this).is(':checked')) {
      $(".toggleVisibility22").fadeTo(2, 1);
      $(".colorBox2").fadeTo(2, 1);
      myApp.clothing[index].checked = true;
    }
    else {
      $(".toggleVisibility22").fadeTo(2, 0);
      $(".colorBox2").fadeTo(2, 0);
      myApp.clothing[index].checked = false;
    }
  });

  $('#switch33').change(function () {
    const index = 2;
    if ($(this).is(':checked')) {
      $(".toggleVisibility33").fadeTo(2, 1);
      $(".colorBox3").fadeTo(2, 1);
      myApp.clothing[index].checked = true;
    }
    else {
      $(".toggleVisibility33").fadeTo(2, 0);
      $(".colorBox3").fadeTo(2, 0);
      myApp.clothing[index].checked = false;
    }
  });

  $('#switch44').change(function () {
    const index = 3;
    if ($(this).is(':checked')) {
      $(".toggleVisibility44").fadeTo(2, 1);
      $(".colorBox4").fadeTo(2, 1);
      myApp.clothing[index].checked = true;
    }
    else {
      $(".toggleVisibility44").fadeTo(2, 0);
      $(".colorBox4").fadeTo(2, 0);
      myApp.clothing[index].checked = false;
    }
  });

  $('#switch55').change(function () {
    const index = 4;
    if ($(this).is(':checked')) {
      $(".toggleVisibility55").fadeTo(2, 1);
      $(".colorBox5").fadeTo(2, 1);
      myApp.clothing[index].checked = true;
    }
    else {
      $(".toggleVisibility55").fadeTo(2, 0);
      $(".colorBox4").fadeTo(2, 0);
      myApp.clothing[index].checked = false;
    }
  });
}

myApp.clickEvent = function () {
 $('.box11').click(function(){
   const index = 0;
   if (myApp.clothing[index].checked) {
     myApp.clothing[index].checked = false;
     $(this).find(".showOnClick").hide();
     $(this).find(".showOnPageLoad").show();

   } else {
     myApp.clothing[index].checked = true;
     $(this).find(".showOnClick").show();
     $(this).find(".showOnPageLoad").hide();
   }
 });
  $('.box22').click(function () {
    console.log('clicked');
  });
  $('.box33').click(function () {
    console.log('clicked');
  });
  $('.box44').click(function () {
    console.log('clicked');
  });
  $('.box55').click(function () {
    console.log('clicked');
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
  myApp.changeEvents2();
  myApp.clickEvent();
  myApp.calculateEvents();
}

//Document ready: 
$(function () {
  myApp.init();
});