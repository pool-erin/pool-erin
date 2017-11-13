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
 

  
var randint;  
var maxValue = -1;
var maxMajor = null;
for (var key in majorPoints) {
  
  if (majorPoints[key] > maxValue) {
    maxValue = majorPoints[key];
    maxMajor = key;
  }
}

  
switch (maxMajor)
{
  case "history" :

randint = Math.floor(Math.random() * 23);

switch(randint)
{

case 0  : 
out = "African American Studies";
break;
case 1 :
out = "African and Middle Eastern Studies";
break;
case 2 :
out = "American Indian Studies";
break;
case 3 :
out ="American Literature and Culture";
break;
case 4 :
out = "Ancient Near East and Egyptology";
break;
case 5 :
out = "Asian American Studies";
break;
case 6 :
out = "Asian Studies";
break;
case 7 :
out = "Central and East European Languages and Cultures";
break;
case 8 :
out = "Chicana and Chicano Studies";
break;
case 9 :
out = "Classical Civilization";
break;
case 10 :
out = "German";
break;
case 11 :
out = "Global Studies";
break;
case 12 :
out = "Greek";
break;
case 13:
out = "Japanese";
break;
case 14 :
out = "Jewish Studies";
break;
case 15 :
out = "Korean";
break;
case 16 :
out = "Latin";
break;
case  17:
out ="Latin American Studies";
break;
case 18 :
out = "Middle Eastern Studies";
break;
case 19 :
out = "Portuguese";
break;
case 20 :
out = "Russian Language and Literature";
break;
case 21:
out = "Scandinavian Languages and Cultures";
break;
case  22:
out = "Spanish and Community and Culture";
break;
default: out = "Drop out"


}

break;
  case "intellectual" :
randint = Math.floor(Math.random() * 7);

switch(randint)
{

case 0:
out = "Philosophy";
break;

case 1:
out = "Sociology";
break;

case 2:
out = "Anthropology";
break;

case 3:
out = "Psychology";
break;

case 4:
out = "Linguistics";
break;

case 5:
out = "English";
break;

case 6:
out = "Political Science";
break;



}


break;
  case "arts/media" :
randint = Math.floor(Math.random() * 9);

switch(randint)
{

case 0:
out = "Music History";
break;

case 1:
out = "Music";
break;

case 2:
out = "Ethnomusicology";
break;

case 3:
out = "Film and Television";
break;

case 4:
out = "Theater";
break;

case 5:
out = "Communication";
break;

case 6:
out = "Art";
break;

case 7:
out = "Dance";
break;

case 8:
out = "Design/Media Arts";
break;


}




break;
  case "money" :
randint = Math.floor(Math.random() * 4);

switch(randint)
{

case 0: out = "Business Economics"; 
break;

case 1: out = "Economics";
break;

case 2: out = "Applied Economics";
break;

case 3: out = "Financial Actuarial Mathematics"; 
break;
}



break;
  case "environmental" :
randint = Math.floor(Math.random() * 5);

switch (randint)
{

case 0: out = "Urban Planning";
break;

case 1: out = "Earth and Environmental Science";
break;

case 2: out = "Ecology, Behavior, and Evolution";
break;

case 3: out = "Geography and Environmental Studies";
break;

case 4: out = "Geography"; 
break;

}


break;



}  
  
  
 
  
//out = maxMajor;
//out = 5; 
document.getElementsByName('output')[0].value= out;
 
}
