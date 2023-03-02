const test = 12
console.log(test)

const renderDate = function(containerDiv, countDownDate){
    var theDate = new Date(countDownDate).getTime();
    var now = new Date().getTime();
    var distance = theDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById(containerDiv).innerHTML = days + "d " + hours +"h " + minutes + "m " + seconds + "s ";
}

const makeCountDown = function(containerDiv, countDownDate){
    console.log(new Date(countDownDate))
    //setTimeout(function() {
    renderDate(containerDiv, countDownDate)
    //}, 100);

    setInterval(function() {
        renderDate(containerDiv, countDownDate)
    }, 1000);
}



window.addEventListener('load', function () {
    makeCountDown('countdown1', '2023/05/23 14:30:00') //End of School
    makeCountDown('countdown2', '2023/03/17 7:30:00') //Continuation Pictures
})