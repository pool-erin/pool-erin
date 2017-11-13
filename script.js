function calculateMajor() {

var majorName = document.getElementById("major").value;
var out; 
  
// This is a dicitionary. Key : value. So art, language, math, are keys that are associated to 0, 0, 2. To get a value, do majorPoints[key]. 
 // So for example, majorPoints[art] = 0. majorPoints[math] = 2; 
var majorPoints = {
  "history" : 0,
  "intellectual" : 0,
  "arts/media" : 0,
  "money" : 0,
  "environmental" : 0
}

//class points
majorPoints["history"]+=document.getElementById("Physics1C").checked;
majorPoints["history"]+=document.getElementById("Chem20L").checked;
majorPoints["intellectual"]+=document.getElementById("CS31").checked;
majorPoints["intellectual"]+=document.getElementById("Math33A").checked;
majorPoints["intellectual"]+=document.getElementById("Math33B").checked;
majorPoints["arts/media"]+=document.getElementById("Chem20A").checked;
majorPoints["arts/media"]+=document.getElementById("Math31A").checked;
majorPoints["arts/media"]+=document.getElementById("Math31B").checked;
majorPoints["money"]+=document.getElementById("Physics1A").checked;
majorPoints["money"]+=document.getElementById("Physics4BL").checked;
majorPoints["environmental"]+=document.getElementById("Physics1B").checked;
majorPoints["environmental"]+=document.getElementById("Physics4AL").checked;
//history questions 
majorPoints["history"]+=document.getElementById("country").checked;
majorPoints["history"]+=document.getElementById("movies").checked;
majorPoints["history"]+=document.getElementById("labor").checked;
majorPoints["history"]+=document.getElementById("cabo").checked;
majorPoints["history"]+=document.getElementById("feast").checked;
majorPoints["history"]+=document.getElementById("french").checked;
//intellectual
majorPoints["intellectual"]+=document.getElementById("college").checked;
majorPoints["intellectual"]+=document.getElementById("rick").checked;
majorPoints["intellectual"]+=document.getElementById("arguments").checked;
majorPoints["intellectual"]+=document.getElementById("socialism").checked;
majorPoints["intellectual"]+=document.getElementById("psych").checked;
majorPoints["intellectual"]+=document.getElementById("eng").checked;
// arts/media
majorPoints["arts/media"]+=document.getElementById("thirsty").checked;
majorPoints["arts/media"]+=document.getElementById("playdough").checked;  
majorPoints["arts/media"]+=document.getElementById("tumblr").checked;
majorPoints["arts/media"]+=document.getElementById("celeb").checked;
majorPoints["arts/media"]+=document.getElementById("denim").checked;
majorPoints["arts/media"]+=document.getElementById("playlist").checked;
// money
majorPoints["money"]+=document.getElementById("monopoly").checked;  
majorPoints["money"]+=document.getElementById("Robinhood").checked;
majorPoints["money"]+=document.getElementById("Bitcoin").checked;
majorPoints["money"]+=document.getElementById("yeezys").checked;
majorPoints["money"]+=document.getElementById("sharktank").checked;
majorPoints["money"]+=document.getElementById("401K").checked;
// environmental
majorPoints["environmental"]+=document.getElementById("bplate").checked; 
majorPoints["environmental"]+=document.getElementById("vegan").checked;
majorPoints["environmental"]+=document.getElementById("calpirg").checked;
majorPoints["environmental"]+=document.getElementById("hydro").checked;
majorPoints["environmental"]+=document.getElementById("teeth").checked; 
majorPoints["environmental"]+=document.getElementById("brake").checked;
  
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
 
var randomNumber = Math.floor(Math.random() * 6);

  
  
var maxValue = -1;
var maxMajor = null;
for (var key in majorPoints) {
  
  if (majorPoints[key] > maxValue) {
    maxValue = majorPoints[key];
    maxMajor = key;
  }
}
  
//out = maxMajor;
out = randomNumber; 
document.getElementsByName('output')[0].value= out;

}
