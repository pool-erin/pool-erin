

function calculateMajor() {

var majorName = document.getElementById("major").value;
var out; 
switch(majorName)
  {
    case "Aerospace Engineering": 
      out = "Philosophy";
      break;
    case "Computer Science":
      out = "Gender Studies";
      break;
    default: 
      out = "JUST DROP OUT!";
      ;   
  }
  


document.getElementsByName('output')[0].value= out;

}
