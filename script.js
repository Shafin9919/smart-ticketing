const allSeats = document.querySelectorAll(".seat-num");
let ticketCounter = document.getElementById("ticket-counter");
let availableSeat = document.getElementById("available-seats");
const totalprice = document.getElementById("total-amount");
const couponVaidator =document.getElementById("coupon-validator-input");
const couponBtn=document.getElementById("coupon-btn")
const discountPrice=document.getElementById("discounted-price")

let price;

for (const seat of allSeats) {
  const seatNum = seat.innerText;

  let selectedSeatsArr = [seatNum, "Economy", "550"];

  seat.addEventListener("click", () => {
    seat.classList.toggle("seat-selected");

    let counter = ticketCounter.innerText;
    let seatTaken = parseInt(counter) + 1;

    if (seat.classList.contains("seat-selected")) {
      if (seatTaken <= 4) {
        ticketCounter.innerText = seatTaken;
        let remainingSeat = parseInt(availableSeat.innerText) - 1;
        availableSeat.innerText = remainingSeat;

        price = parseInt(totalprice.innerText) + 550;
        totalprice.innerText = price;

        selectedSeatsArr.map((el) => {
          let selectedSeats = document.getElementById("selected-seats");
          let newP = document.createElement("p");
          newP.innerText = el;
          newP.classList.add(seatNum);
          selectedSeats.appendChild(newP);
        });
      } else {
        seat.classList.remove("seat-selected");
      }
    } else {
      let seatTaken = parseInt(counter) - 1;
      ticketCounter.innerText = seatTaken;
      let remainingSeat = parseInt(availableSeat.innerText) + 1;
      availableSeat.innerText = remainingSeat;

      let price = parseInt(totalprice.innerText) - 550;
      totalprice.innerText = price;

      selectedSeatsArr.map((el) => {
        let selectedSeats = document.getElementById("selected-seats");
        document.querySelectorAll(`.${seatNum}`).forEach((arr) => {
          selectedSeats.removeChild(arr);
        });
      });
    }
  });
}

const discountedPrice = (discount)=>price - price *discount;

couponBtn.addEventListener("click",()=>{
    

    if(couponVaidator.value === "NEW20"){
        const discount=.2;
      
       discountPrice.innerText= discountedPrice(discount);
       document.getElementById("invalid-coupon-tooltip").style.visibility="hidden"
        

    }
    else if(couponVaidator.value === "COUPLE15"){
        const discount=.15;
        discountedPrice(discount);
        discountPrice.innerText= discountedPrice(discount);
        document.getElementById("invalid-coupon-tooltip").style.visibility="hidden"
        

    }
    else{
        document.getElementById("invalid-coupon-tooltip").style.visibility="visible"
    }
})

const nextBtn=document.getElementById("done-btn");
nextBtn.addEventListener('click', ()=>{

    document.getElementById("modal").style.visibility="visible"
})


const continueBtn=document.getElementById("continue-btn")
continueBtn.addEventListener('click',()=>{

document.getElementById("modal").style.visibility="hidden"


} )
