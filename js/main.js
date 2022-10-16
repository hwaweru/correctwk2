const daysOfTheWeek=["Sunday","Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday" ];
const maleNames=["Kwasi","Kwadwo","Kwabena", "Kwaku","Yaw","Kofi" ,"Kwame"];
const femaleNames=["Akosua","Adwoa","Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var century=19;
var year=1989;
var month=12;
var day=5;
var gender="m";

function calculateNameAndDay(century,year,month,day,gender){


var indexOfTheDay=Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);

var dayTheUserWasBorn=daysOfTheWeek[indexOfTheDay];
var name=null;
if(gender==="m"){
    name=maleNames[indexOfTheDay];
} else if(gender==="f"){
    name=femaleNames[indexOfTheDay];
}else
alert("Invalid gender");
var list=[dayTheUserWasBorn,name];

return list;
}
function button{
var UserInputYear=parseInt(prompt("Enter Year Of Birth:"));
var UserInputMonth=pparseInt(prompt("Enter Month Of Birth:"));
var UserInputDay=parseInt(prompt("Enter Day Of Birth:"));
var UserInputGender=prompt("Enter Gender:");
var UserInputCentury=parseInt(UserInputYear.toString().substring(0,2));

calculateNameAndDay(UserInputCentury,UserInputYear,UserInputMonth,UserInputDay,UserInputGender);
}