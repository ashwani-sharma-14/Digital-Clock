
const clock = ()=>{
  // manipulating clock boxes
    let hour = document.querySelector(".hour");
    let minute = document.querySelector(".minute");
    let second = document.querySelector(".second");
    let dates = document.querySelector(".date");
    let months = document.querySelector(".month");
    let years = document.querySelector(".year");

    let mon = ['01','02','03','04','05','06','07','08','09','10','11','12']
    // getting time and date from system using get function
    let date = new Date()
    let hr= date.getHours();
    let min = date. getMinutes();
    let sec = date.getSeconds();
    let d = date.getDate();
    let month = mon[date.getMonth()];
    let year = date.getFullYear();
  
// Displaying Date and Time on Page 
  hour.innerText= hr;
  minute.innerText = min;
  second.innerText = sec;
  dates.innerText = d;
  months.innerText = month;
  years.innerText= year;

}

setInterval(clock, 10)