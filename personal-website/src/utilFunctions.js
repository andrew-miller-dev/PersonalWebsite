const date = new Date();
const birthday = new Date("1992-05-05");


export function getAge() {
    let currentYear = date.getFullYear();
    let birthYear = birthday.getFullYear();
    let age = currentYear - birthYear;
    if((date.getMonth() < birthday.getMonth()) || (date.getMonth() === birthday.getMonth() && date.getDay() < birthday.getDay())) {
        age = age - 1;
    }
    return age;
}