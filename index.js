// javascript
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeScore = 0
let guestScore = 0


function addOne() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function addTwo() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function addThree() {
    homeScore += 3
    homeEl.textContent = homeScore
    }

function addOneGuest() {
    guestScore += 1
    guestEl.textContent = guestScore  
} 

function addTwoGuest() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    guestEl.textContent = guestScore
} 