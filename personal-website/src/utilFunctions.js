const date = new Date();
const birthday = new Date("1992-05-05");
const {format} = require('date-fns-tz');


export function getAge() {
    let currentYear = date.getFullYear();
    let birthYear = birthday.getFullYear();
    let age = currentYear - birthYear;
    if((date.getMonth() < birthday.getMonth()) || (date.getMonth() === birthday.getMonth() && date.getDay() < birthday.getDay())) {
        age = age - 1;
    }
    return age;
}

export function checkForPresent(dateCheck) {
    if (dateCheck === format(date,"MMMM yyyy")) {
        return "Present"
    }
    else return dateCheck;
}

export function createLanguageBar(array) {
    let newArr = [];
    array.forEach((item) =>{
        
        newArr.push(<span style={{fontSize:"small", color:"grey", borderStyle:"solid", borderWidth:"2px", paddingLeft:"1px", paddingRight:"1px", borderRadius:"4px"}}> {item} </span>);
        
    })

    return newArr;
}