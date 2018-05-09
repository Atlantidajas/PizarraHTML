/* Functions Date */

function DateToday(){
    var date = new Date();
    fullDate = date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear()+".";
    document.getElementById("date").innerHTML = fullDate;

}
