input.onButtonPressed(Button.A, function () {
    PA += 1
    Rounds += 1
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    updateScore()
})
input.onButtonPressed(Button.AB, function () {
    Ties += 1
    Rounds += 1
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    updateScore()
})
input.onButtonPressed(Button.B, function () {
    PB += 1
    Rounds += 1
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    updateScore()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    PA = 0
    PB = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("Ready to Play???")
    basic.pause(200)
    updateScore()
}
function updateScore () {
    OLED.clear()
    OLED.newLine()
    OLED.writeStringNewLine("Player A:" + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B:" + PB)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds" + Rounds)
}
let PB = 0
let Ties = 0
let Rounds = 0
let PA = 0
reset()
