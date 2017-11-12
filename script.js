function calculateMajor() {

var majorName = document.getElementById("major").value;
var out; 
  
// This is a dicitionary. Key : value. So art, language, math, are keys that are associated to 0, 0, 2. To get a value, do majorPoints[key]. 
 // So for example, majorPoints[art] = 0. majorPoints[math] = 2; 
var majorPoints = {
  "art" : 0,
  "language" : 0,
  "math" : 0
}



 
switch(majorName)
  {
    case "Aerospace Engineering": 
      majorPoints["art"]++
    //  out = "Philosophy";
      break;
    case "Computer Science":
      majorPoints["language"]++
      break;
    default: 
            majorPoints["math"]++;   
  }
  
var maxValue = -1;
var maxMajor = null;
for (var key in majorPoints) {
  
  if (majorPoints[key] > maxValue) {
    maxValue = majorPoints[key];
    maxMajor = key;
  }
}
  
out = maxMajor;
  
document.getElementsByName('output')[0].value= out;

}
