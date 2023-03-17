let leftTeamCounter = document.getElementById("leftTeamCounter")
let leftCounter = 0
let leftPoint = undefined
let leftPoint2 = undefined
let leftSlashDiv = undefined

let leftTeamAdd = () => {
    leftPoint = document.getElementById("leftPoint")
    leftPoint2 = document.getElementById("leftPoint2")
    leftSlashDiv = document.getElementById("leftSlashDiv")
    leftSlashDiv2 = document.getElementById("leftSlashDiv2")
    leftCounter++
    if (leftCounter <= 6) {
        for (let i = 0; i <= leftCounter; i++) {
            if (i === 1) {
                leftPoint.className = "onePoints"
            }
            if (i === 2) {
                leftPoint.className = "twoPoints"
            }
            if (i === 3) {
                leftPoint.className = "threePoints"
            }
            if (i === 4) {
                leftPoint.className = "fourPoints"
            }
            if (i === 5) {
                leftSlashDiv.className = "slash"
            }
            if (i === 6) {
                leftTeamCounter.innerHTML += `<div id="leftPoint2" class="onePoints"><div id="leftSlashDiv2" class=" "></div></div>`
            }
        }
    }
    if (leftCounter>6 && leftCounter <= 11) {
        for (let b = 7; b <= leftCounter; b++) {
            if (b === 7) {
                leftPoint2.className = "twoPoints"
            }
            if (b === 8) {
                leftPoint2.className = "threePoints"
            }
            if (b === 9) {
                leftPoint2.className = "fourPoints"
            }
            if (b === 10) {
                leftSlashDiv2.className = "slash"
            }
            if (b === 11) {
                leftTeamCounter.innerHTML += `<div id="leftPoint3" class="onePoints"><div id="leftSlashDiv3" class=" "></div></div>`
            }
        }
    }
    if (leftCounter>11 && leftCounter <= 15) {
        for (let c = 12; c <= leftCounter; c++) {
            if (c === 12) {
                leftPoint3.className = "twoPoints"
            }
            if (c === 13) {
                leftPoint3.className = "threePoints"
            }
            if (c === 14) {
                leftPoint3.className = "fourPoints"
            }
            if (c === 15) {
                leftSlashDiv3.className = "slash"
            }
        }
    }
}









let rightTeamCounter = document.getElementById("rightTeamCounter")
let rightCounter = 0
let rightPoint = undefined
let rightPoint2 = undefined
let rightSlashDiv = undefined

let rightTeamAdd = () => {
    rightPoint = document.getElementById("rightPoint")
    rightPoint2 = document.getElementById("rightPoint2")
    rightSlashDiv = document.getElementById("rightSlashDiv")
    rightSlashDiv2 = document.getElementById("rightSlashDiv2")
    rightCounter++
    if (rightCounter <= 6) {
        for (let i = 0; i <= rightCounter; i++) {
            if (i === 1) {
                rightPoint.className = "onePoints"
            }
            if (i === 2) {
                rightPoint.className = "twoPoints"
            }
            if (i === 3) {
                rightPoint.className = "threePoints"
            }
            if (i === 4) {
                rightPoint.className = "fourPoints"
            }
            if (i === 5) {
                rightSlashDiv.className = "slash"
            }
            if (i === 6) {
                rightTeamCounter.innerHTML += `<div id="rightPoint2" class="onePoints"><div id="rightSlashDiv2" class=" "></div></div>`
            }
        }
    }
    if (rightCounter>6 && rightCounter <= 11) {
        for (let b = 7; b <= rightCounter; b++) {
            if (b === 7) {
                rightPoint2.className = "twoPoints"
            }
            if (b === 8) {
                rightPoint2.className = "threePoints"
            }
            if (b === 9) {
                rightPoint2.className = "fourPoints"
            }
            if (b === 10) {
                rightSlashDiv2.className = "slash"
            }
            if (b === 11) {
                rightTeamCounter.innerHTML += `<div id="rightPoint3" class="onePoints"><div id="rightSlashDiv3" class=" "></div></div>`
            }
        }
    }
    if (rightCounter>11 && rightCounter <= 15) {
        for (let c = 12; c <= rightCounter; c++) {
            if (c === 12) {
                rightPoint3.className = "twoPoints"
            }
            if (c === 13) {
                rightPoint3.className = "threePoints"
            }
            if (c === 14) {
                rightPoint3.className = "fourPoints"
            }
            if (c === 15) {
                rightSlashDiv3.className = "slash"
            }
        }
    }
}




let rightTeamRest = () => {

}