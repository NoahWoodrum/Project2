$(document).ready(function() {
  $("#languageForm").submit(function(event) {
  event.preventDefault();

    $('#ruby').hide();
    $('#c').hide();
    $('#javascript').hide();
    $('#Basics').hide();


  const question1 = $("input#question1").val();
  const question2 = $("input#question2").val();
  const question3 = $("input#question3").val();
  const question4 = $("input#question4").val();
  const question5 = $("input#question5").val();

  if (question1 === "yes" && question2 === "yes" && question3 === "yes" && question4 === "yes" && question5 === "yes") {

    $("#ruby").show();
  }

  else if (question1 === "yes" && question2 === "yes" && question3 === "yes" && question4 === "yes" && question5 === "no") {

    $("#c").show();
  }
  else if (question1 === "yes" && question2 === "yes" && question3 === "no" && question4 === "yes" && question5 === "yes") {

    $("#javascript").show();
  }
  else if (question1 === "no" && question2 === "yes" && question3 === "yes" && question4 === "yes" && question5 === "yes") {

    $("#ruby").show();
  }
  else if (question1 === "yes" && question2 === "no" && question3 === "yes" && question4 === "yes" && question5 === "yes") {

    $("#c").show();
  }
  else if (question1 === "yes" && question2 === "yes" && question3 === "yes" && question4 === "no" && question5 === "yes") {

    $("#javascript").show();
  }
  else if (question1 === "yes" && question2 === "yes" && question3 === "no" && question4 === "no" && question5 === "no") {

    $("#ruby").show();
  }
  else {

    $("#Basics").show();
  }
  })
})