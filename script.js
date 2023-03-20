let leftTeamCounter = document.getElementById("leftTeamCounter")
let leftMidgame = document.getElementById("leftMidgame")
let rightMidgame = document.getElementById("rightMidgame")
let contDown = document.getElementById("contDown")

const ganadorFunc = () => {
    alert(`El ganador es ${ganador}`)
}

const resetGame = () => {
    leftCounter = 0
    leftPoint.className = " "
    leftPoint2.className = " "
    leftPoint3.className = " "
    leftPoint4.className = " "
    leftPoint5.className = " "
    leftPoint6.className = " "
    leftSlashDiv.className = " "
    leftSlashDiv2.className = " "
    leftSlashDiv3.className = " "
    leftSlashDiv4.className = " "
    leftSlashDiv5.className = " "
    leftSlashDiv6.className = " "
    rightCounter = 0
    rightPoint.className = " "
    rightPoint2.className = " "
    rightPoint3.className = " "
    rightPoint4.className = " "
    rightPoint5.className = " "
    rightPoint6.className = " "
    rightSlashDiv.className = " "
    rightSlashDiv2.className = " "
    rightSlashDiv3.className = " "
    rightSlashDiv4.className = " "
    rightSlashDiv5.className = " "
    rightSlashDiv6.className = " "
}

let leftCounter = 0
const midgameFunction = () => {
    if (leftCounter >= 16) {
        leftMidgame.className = "midgame"
    } else {
        leftMidgame.className = " "
    }

    if (rightCounter >= 16) {
        rightMidgame.className = "midgame"
    } else {
        rightMidgame.className = " "
    }
}

const leftTeam = () => {
    leftPoint = document.getElementById("leftPoint")
    leftPoint2 = document.getElementById("leftPoint2")
    leftPoint3 = document.getElementById("leftPoint3")
    leftPoint4 = document.getElementById("leftPoint4")
    leftPoint5 = document.getElementById("leftPoint5")
    leftPoint6 = document.getElementById("leftPoint6")
    leftSlashDiv = document.getElementById("leftSlashDiv")
    leftSlashDiv2 = document.getElementById("leftSlashDiv2")
    leftSlashDiv3 = document.getElementById("leftSlashDiv3")
    leftSlashDiv4 = document.getElementById("leftSlashDiv4")
    leftSlashDiv5 = document.getElementById("leftSlashDiv5")
    leftSlashDiv6 = document.getElementById("leftSlashDiv6")
    if (leftCounter <= 1) {
        for (let i = 0; i <= leftCounter; i++) {
            if (i === 0) {
                leftPoint.className = " "
            }
        }
    }
    if (leftCounter > 0 && leftCounter <= 30 ) {
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
                leftPoint4.className = " "
                contDown.className = "contDown"
            }
            if (i === 16) {
                leftPoint4.className = "onePoints"
                contDown.className = "contDown loleado"
            }
            if (i === 17) {
                leftPoint4.className = "twoPoints"
            }
            if (i === 18) {
                leftPoint4.className = "threePoints"
            }
            if (i === 19) {
                leftPoint4.className = "fourPoints"
                leftSlashDiv4.className = " "
            }
            if (i === 20) {
                leftSlashDiv4.className = "slash"
                leftPoint5.className = " "
            }
            if (i === 21) {
                leftPoint5.className = "onePoints"
            }
            if (i === 22) {
                leftPoint5.className = "twoPoints"
            }
            if (i === 23) {
                leftPoint5.className = "threePoints"
            }
            if (i === 24) {
                leftPoint5.className = "fourPoints"
                leftSlashDiv5.className = " "
            }
            if (i === 25) {
                leftSlashDiv5.className = "slash"
                leftPoint6.className = " "
            }
            if (i === 26) {
                leftPoint6.className = "onePoints"
            }
            if (i === 27) {
                leftPoint6.className = "twoPoints"
            }
            if (i === 28) {
                leftPoint6.className = "threePoints"
            }
            if (i === 29) {
                leftPoint6.className = "fourPoints"
                leftSlashDiv6.className = " "
            }
            if (i === 30) {
                leftSlashDiv6.className = "slash"
                ganador = "YO | NOS"
                contDown.className = "contDown"
                ganadorFunc()
                resetGame()
            }
        }
    }
}
const leftTeamAdd = () => {
    if (leftCounter < 30) {
        leftCounter++
    }
    leftTeam()
    midgameFunction()
}

const leftTeamRest = () => {
    if (leftCounter > 0) {
        leftCounter--
    }
    leftTeam()
    midgameFunction()
}

let rightTeamCounter = document.getElementById("rightTeamCounter")
let rightCounter = 0
const rightTeam = () => {
    rightPoint = document.getElementById("rightPoint")
    rightPoint2 = document.getElementById("rightPoint2")
    rightPoint3 = document.getElementById("rightPoint3")
    rightPoint4 = document.getElementById("rightPoint4")
    rightPoint5 = document.getElementById("rightPoint5")
    rightPoint6 = document.getElementById("rightPoint6")
    rightSlashDiv = document.getElementById("rightSlashDiv")
    rightSlashDiv2 = document.getElementById("rightSlashDiv2")
    rightSlashDiv3 = document.getElementById("rightSlashDiv3")
    rightSlashDiv4 = document.getElementById("rightSlashDiv4")
    rightSlashDiv5 = document.getElementById("rightSlashDiv5")
    rightSlashDiv6 = document.getElementById("rightSlashDiv6")
    if (rightCounter <= 1) {
        for (let i = 0; i <= rightCounter; i++) {
            if (i === 0) {
                rightPoint.className = " "
            }
        }
    }
    if (rightCounter > 0 && rightCounter <= 30 ) {
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
                rightPoint4.className = " "
            }
            if (i === 16) {
                rightPoint4.className = "onePoints"
            }
            if (i === 17) {
                rightPoint4.className = "twoPoints"
            }
            if (i === 18) {
                rightPoint4.className = "threePoints"
            }
            if (i === 19) {
                rightPoint4.className = "fourPoints"
                rightSlashDiv4.className = " "
            }
            if (i === 20) {
                rightSlashDiv4.className = "slash"
                rightPoint5.className = " "
            }
            if (i === 21) {
                rightPoint5.className = "onePoints"
            }
            if (i === 22) {
                rightPoint5.className = "twoPoints"
            }
            if (i === 23) {
                rightPoint5.className = "threePoints"
            }
            if (i === 24) {
                rightPoint5.className = "fourPoints"
                rightSlashDiv5.className = " "
            }
            if (i === 25) {
                rightSlashDiv5.className = "slash"
                rightPoint6.className = " "
            }
            if (i === 26) {
                rightPoint6.className = "onePoints"
            }
            if (i === 27) {
                rightPoint6.className = "twoPoints"
            }
            if (i === 28) {
                rightPoint6.className = "threePoints"
            }
            if (i === 29) {
                rightPoint6.className = "fourPoints"
                rightSlashDiv6.className = " "
            }
            if (i === 30) {
                rightSlashDiv6.className = "slash"
                ganador = "EL | ELLOS"
                contDown.className = "contDown"
                ganadorFunc()
                resetGame()
            }
        }
    }
}
const rightTeamAdd = () => {
    if (rightCounter < 30) {
        rightCounter++
    }
    midgameFunction()
    rightTeam()
}

const rightTeamRest = () => {
    if (rightCounter > 0) {
        rightCounter--
    }
    midgameFunction()
    rightTeam()
}
