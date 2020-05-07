//Global variable
var decArr = [];                        /*Stores the array of rational finite numbers with 
                                          increasing decimal digits representing irrational number*/
var raisedArr = [];                     /*Stores the array containing rational numbers raised to values of decArr*/

/*
  Function name : getSequence();
  Functionality : Returns a finite sequence representing irrational number
  Parameter(s)  : irrStr - A string representing an irrational number
  Return value  : {+strings representing irrational number+} 
*/
function getSequence(irrStr)
{
  var dec = irrStr.split(".");            //Stores the decimal digit in an array
  var sumStr="";                          //Stores the string representing irrational number                          

  for(var i=0;i<dec[1].length;i++)
    {
      sumStr+=dec[1][i];
      decArr.push(dec[0]+"."+sumStr);
    }
  return "{"+decArr.join(", ")+"}";
}

/*
  Function name : raisedTo(ratStr);
  Functionality : Returns a finite sequence representing rational number raised to increasing decimal values ofirrational number
  Parameter(s)  : ratStr -  Rational number in string
  Return value  : {+strings representing rational number raised to irrational number+} 
*/
function raisedTo(ratStr)
{
  var rational = parseFloat(ratStr);
  for(var i=0;i<decArr.length;i++)
    {
      raisedArr.push(rational**parseFloat(decArr[i]));
    }
  return "{"+raisedArr.join(", ")+"}";
}

function printInput()
{
  
  var rational = parseFloat($("#rational").val());        //Rational value obtained from form
  var irrational = parseFloat($("#irrational").val());    //Irational value obtained from form
  
  $("#rationalEnter").html(rational.toString());
  $("#irrationalEnter").html(irrational.toString());
  $("#rationalSeq").html(getSequence(irrational.toString()));
  $("#raisedSeq").html(raisedTo(rational.toString()));
  decArr=[];                //Otherwise gives error
  raisedArr=[];
}

$(document).ready(function(){
  printInput();
});
