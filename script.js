function calculateMajor() {

var majorName = document.getElementById("major").value;
var out; 
  
var majorPoints = [ArtPoints = 0, LanguagePoints =0] // Array for points
  
// Different switch questions. Different answers will add different points
switch(majorName) 
  {
    case "Aerospace Engineering": 
      majorPoints[0]++
    //  out = "Philosophy";
      break;
    case "Computer Science":
      majorPoints[0]++
      
     // out = "Gender Studies";
      break;
    default: 
   //   out = "JUST DROP OUT!";
      ;   
  }
  
out = majorPoints[0];
document.getElementsByName('output')[0].value= out;

}
