const allSeats = document.querySelectorAll(".seat-num");
let ticketCounter = document.getElementById("ticket-counter");
let availableSeat = document.getElementById("available-seats");
let totalprice = document.getElementById("total-amount");
const couponVaidator = document.getElementById("coupon-validator-input");
const couponBtn = document.getElementById("coupon-btn");
const discountPrice = document.getElementById("discounted-price");
const grandTotalPrice = document.getElementById("grand-total");

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

        grandTotalPrice.innerText = price;

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
       price = parseInt(totalprice.innerText) - 550;
      totalprice.innerText = price;
      grandTotalPrice.innerText = price;
      selectedSeatsArr.map((el) => {
        let selectedSeats = document.getElementById("selected-seats");
        document.querySelectorAll(`.${seatNum}`).forEach((arr) => {
          selectedSeats.removeChild(arr);
        });
      });
    }
  });
}
let discountPercentage = 0;
const discountedPrice = (discount) => price - price * discount;

couponBtn.addEventListener("click", () => {
  if (couponVaidator.value === "NEW20") {
    discountPercentage = 0.2;

    discountPrice.innerText = discountedPrice(discountPercentage);
    grandTotalPrice.innerText = discountedPrice(discountPercentage);
    document.getElementById("invalid-coupon-tooltip").style.visibility =
      "hidden";
  } else if (couponVaidator.value === "COUPLE15") {
    discountPercentage = 0.15;
    discountPrice.innerText = discountedPrice(discountPercentage);
    grandTotalPrice.innerText = discountedPrice(discountPercentage);
    document.getElementById("invalid-coupon-tooltip").style.visibility =
      "hidden";
  } else {
    discountPrice.innerText = 0;
    grandTotalPrice.innerText = price;
    document.getElementById("invalid-coupon-tooltip").style.visibility =
      "visible";
  }
});

const nextBtn = document.getElementById("done-btn");
nextBtn.addEventListener("click", () => {
  if (
    document.getElementById("phone-number").value &&
    document.getElementById("name").value
  ) {
    document.getElementById("modal").style.visibility = "visible";
  } else {
    document.querySelectorAll(".invalid-tooltip").forEach((el) => {
      el.style.visibility = "visible";
    });
  }
});

const continueBtn = document.getElementById("continue-btn");
continueBtn.addEventListener("click", () => {
  document.getElementById("modal").style.visibility = "hidden";
});
