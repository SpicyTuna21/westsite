const test = 12
console.log(test)

const renderDate = function(containerDiv, countDownDate){
    var theDate = new Date(countDownDate).getTime();
    var now = new Date().getTime();
    if (theDate <= now){
        document.getElementById(containerDiv).innerHTML = 'This event has already occured';
    } else {
        var distance = theDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById(containerDiv).innerHTML = days + "d " + hours +"h " + minutes + "m " + seconds + "s ";
    }
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
    makeCountDown('countdown3', '2023/03/21 7:30:00') //Start of math CMAS
    makeCountDown('countdown4', '2023/03/23 9:30:00') //End of Math CMAS
    makeCountDown('countdown5', '2023/03/27 0:00:00') //Start of Spring Break
    makeCountDown('countdown6', '2023/04/03 23:59:00') //End Spring Break
    makeCountDown('countdown7', '2023/04/11 7:30:00') //Star of LA CMAS
    makeCountDown('countdown8', '2023/04/13 9:30:00') //End of LA CMAS
    makeCountDown('countdown9', '2023/04/19 7:30:00') //Start of science CMAS
    makeCountDown('countdown10', '2023/04/20 9:30:00') //End of science CMAS
    makeCountDown('countdown11', '2023/05/15 0:00:00') //No school
})