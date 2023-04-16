//variables

let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 25;
let BreakTime = 5;

let seconds = "00";

//display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}

//start time
function start() {
    //change the button
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    //change the time
    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = BreakTime - 1;

    breakCount = 0;

    // countdown
    let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        //start
        seconds = seconds - 1;

        if(seconds === 0){
            workMinutes = workMinutes - 1;
            if(workMinutes === -1){
                if(breakCount % 2 === 0){
                    //start Break
                    workMinutes = breakMinutes;
                    breakCount++

                    //change the painel
                    workTittle.classList.remove('active');
                    breakTittle.classList.add('active');
                }else {
                    //contintue Work
                    workMinutes = workTime;
                    breakCount++

                    // change the painel
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }
            seconds = 59;
        }
    }

    //start countdown
    setInterval(timerFunction, 1000); //1000 = 1s
}