$(document).ready(function(){
  $("form.triangleID").submit(function(event){
    event.preventDefault();
    var side1 = parseInt($("#equal").val());
    var side2 = parseInt($("#iso").val());
    var side3 = parseInt($("#scalene").val());

    if(side1===side2 && side2===side3)
    {
      $(".outputClassE").show();

    }
    else if((side1===side2 && side1!=side3) || (side2===side3 && side2!=side1)
    || (side3===side1 && side3!=side2))
    {
      $(".outputClassI").show();
    }
      else if(side1!=side2 && side2!=side3 && side3!=side1)
    {
      $(".outputClassS").show();
    }
    else {
      var sumOfsides1 = side1+side2;
      var sumOfsides2 = side2+side3;
      var sumOfsides3 = side3+side1;
      if(sumOfsides1<=side3)
      {
        $(".outputClassN").show();
      }
      else if (sumOfsides2<=side1)
      {
        $(".outputClassN").show();
      }
      else if(sumOfsides3<=side2)
      {
        $(".outputClassN").show();
      }
      else
      {
        $(".outputClassN1").show();
      }

    }
  });
});
