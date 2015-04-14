var start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0,
    t;

function add() {
    seconds++;

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

var findEstimate = function(){
	clearTimeout(t);
	pages = $("#pages").val();
	var minutes = t*parseFloat(pages)/60;
	$("#minutes").replaceWith(minutes + " minutes to read this book")
};

/* Start button */
start.onclick = function(){
	timer();
	$("#picture").css('visibility', 'visible');
};

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
	findEstimate();
}

// /* Clear button */
// clear.onclick = function() {
//     h1.textContent = "00:00:00";
//     seconds = 0; minutes = 0; hours = 0;
// }