let currentdate=new Date();
console.log("Date And Time :",currentdate);

let dayofWeek=currentdate.getDay();
let Days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(Days[dayofWeek]);

let Year = 2024;
currentdate.setFullYear(Year);
console.log("Updated Date and Time (Year :", Year + "):", currentdate);