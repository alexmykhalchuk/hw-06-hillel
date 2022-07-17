/* 1. Получите текущую дату
Напишите функцию JavaScript, чтобы получить текущую дату. Передайте разделитель в качестве аргумента.
Пример ввода:
curday('-');
Вывод:
"07-07-2022"
*/

/*function getСurrentTime(today) {
        
    let day = today.getDate();
    if (day < 10) {
        day = "0" + day;
    }

    let month = today.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;  
    }

    let year = today.getFullYear();

    return day + '-' + month + '-' + year;

}

let сurrentTime = new Date();
console.log(getСurrentTime(сurrentTime));*/

/*function getTime() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    return today = dd + '-' + mm + '-' + yyyy;
}

alert(getTime());*/




/* 2. Получить название месяца с определенной даты
Напишите функцию JavaScript, чтобы получить название месяца с определенной даты.
Пример ввода:
getMonthName(new Date("10/11/2021"));
Вывод:
"October"
*/

/*function getMonthName(date) {

    let month = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    
    return month[date.getMonth()];
}

let month = new Date();

alert(getMonthName(month));*/




/* 3. Сравнение двух дат
Напишите функцию JavaScript для сравнения дат (т.е. больше, меньше или равно).
Пример ввода:
compareDates(new Date('11/14/2021 00:01'), new Date('11/14/2021 00:00'));
Вывод:
"Date1 > Date2"
*/

/*function compareDates(date1, date2) {

    if (date1 - date2 > 0) {

        return alert("Date1 > Date2");

    } else if (date1 - date2 < 0) {

        return alert("Date1 < Date2");

    } else return alert("Date1 = Date2");

}

let date1 = new Date('11/14/2021 00:01');

let date2 = new Date('11/14/2021 00:01');

compareDates(date1, date2);*/





/* 4. Напишите функцию JavaScript, чтобы проверить, является ли день выходным.
Пример ввода:
checkIsWeekend('Nov 16, 2020');
Вывод:
"не выходной"
*/

/*function checkIsWeekend(date) {
    
    if (date.getDay() == 0 || date.getDay() == 6) {
        alert("выходной");
    } else alert("не выходной");

}

let today = new Date;

checkIsWeekend(today);*/