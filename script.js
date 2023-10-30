const selectedMovie=document.getElementById('movie');
const container=document.getElementById('container');
const seats=document.getElementsByClassName('.row.seats:not(.occupied)')
const count=document.getElementById('number');
const total=document.getElementById('total');


let ticketPrice=+selectedMovie.value;
//update movie
selectedMovie.addEventListener('change',function updateMoviePrice(e){
    ticketPrice=+e.target.value;
    updateTicketCount();
});
// upadate tickets count

function updateTicketCount(){
    selectedSeats=document.querySelectorAll('.row .seat.selected');
   let ticketCount=+selectedSeats.length;
    //console.log(ticketCount);
    count.innerText=ticketCount;
    total.innerText=ticketCount*ticketPrice;
}

// select seats

container.addEventListener("click", function handleClick(e) {
         if (e.target.classList.contains('seat') &&
         !e.target.classList.contains('occupied')){
             e.target.classList.toggle('selected');
            updateTicketCount();
           // console.log(ticketCount);
            // console.log(e.target.classList.contains('seat')&&
            // !e.target.classList.contains('occupied'));
            console.log(e.target);
       }
    });

    



