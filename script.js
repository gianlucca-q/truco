let leftTeamCounter = document.getElementById("leftTeamCounter")
let leftCounter = 0
let leftPoint = undefined
let leftPoint2 = undefined
let leftPoint3 = undefined
let leftSlashDiv = undefined
let leftTeam = () => {
    leftPoint = document.getElementById("leftPoint")
    leftPoint2 = document.getElementById("leftPoint2")
    leftPoint3 = document.getElementById("leftPoint3")
    leftSlashDiv = document.getElementById("leftSlashDiv")
    leftSlashDiv2 = document.getElementById("leftSlashDiv2")
    leftSlashDiv3 = document.getElementById("leftSlashDiv3")
    if (leftCounter <= 1) {
        for (let i = 0; i <= leftCounter; i++) {
            if (i === 0) {
                leftPoint.className = " "
            }
        }
    }
    if (leftCounter > 0 && leftCounter <= 15 ) {
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
                leftSlashDiv.className = " "
            }
            if (i === 5) {
                leftSlashDiv.className = "slash"
                leftPoint2.className = " "
            }
            if (i === 6) {
                leftPoint2.className = "onePoints"
            }
            if (i === 7) {
                leftPoint2.className = "twoPoints"
            }
            if (i === 8) {
                leftPoint2.className = "threePoints"
            }
            if (i === 9) {
                leftPoint2.className = "fourPoints"
                leftSlashDiv2.className = " "
            }
            if (i === 10) {
                leftSlashDiv2.className = "slash"
                leftPoint3.className = " "
            }
            if (i === 11) {
                leftPoint3.className = "onePoints"
            }
            if (i === 12) {
                leftPoint3.className = "twoPoints"
            }
            if (i === 13) {
                leftPoint3.className = "threePoints"
            }
            if (i === 14) {
                leftPoint3.className = "fourPoints"
                leftSlashDiv3.className = " "
            }
            if (i === 15) {
                leftSlashDiv3.className = "slash"
            }
        }
    }
}
let leftTeamAdd = () => {
    leftCounter++
    leftTeam()
}

let leftTeamRest = () => {
    if (leftCounter > 0) {
        leftCounter--
    }
    leftTeam()
}

let rightTeamCounter = document.getElementById("rightTeamCounter")
let rightCounter = 0
let rightPoint = undefined
let rightPoint2 = undefined
let rightPoint3 = undefined
let rightSlashDiv = undefined
let rightTeam = () => {
    rightPoint = document.getElementById("rightPoint")
    rightPoint2 = document.getElementById("rightPoint2")
    rightPoint3 = document.getElementById("rightPoint3")
    rightSlashDiv = document.getElementById("rightSlashDiv")
    rightSlashDiv2 = document.getElementById("rightSlashDiv2")
    rightSlashDiv3 = document.getElementById("rightSlashDiv3")
    if (rightCounter <= 1) {
        for (let i = 0; i <= rightCounter; i++) {
            if (i === 0) {
                rightPoint.className = " "
            }
        }
    }
    if (rightCounter > 0 && rightCounter <= 15 ) {
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
                rightSlashDiv.className = " "
            }
            if (i === 5) {
                rightSlashDiv.className = "slash"
                rightPoint2.className = " "
            }
            if (i === 6) {
                rightPoint2.className = "onePoints"
            }
            if (i === 7) {
                rightPoint2.className = "twoPoints"
            }
            if (i === 8) {
                rightPoint2.className = "threePoints"
            }
            if (i === 9) {
                rightPoint2.className = "fourPoints"
                rightSlashDiv2.className = " "
            }
            if (i === 10) {
                rightSlashDiv2.className = "slash"
                rightPoint3.className = " "
            }
            if (i === 11) {
                rightPoint3.className = "onePoints"
            }
            if (i === 12) {
                rightPoint3.className = "twoPoints"
            }
            if (i === 13) {
                rightPoint3.className = "threePoints"
            }
            if (i === 14) {
                rightPoint3.className = "fourPoints"
                rightSlashDiv3.className = " "
            }
            if (i === 15) {
                rightSlashDiv3.className = "slash"
            }
        }
    }
}
let rightTeamAdd = () => {
    rightCounter++
    rightTeam()
}

let rightTeamRest = () => {
    if (rightCounter > 0) {
        rightCounter--
    }
    rightTeam()
}
