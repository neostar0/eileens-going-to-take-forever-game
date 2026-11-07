let timeout = 0
let booinhouse = 0
let Your_kind = 0
let userready = 0
basic.forever(function () {
    if (userready == 0) {
        basic.showString("Start?")
        basic.showIcon(IconNames.SmallDiamond)
        pauseUntil(() => input.buttonIsPressed(Button.A))
        userready = 1
        booinhouse = 0
        Your_kind = 0
        basic.pause(100)
    }
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Ghost)
        timeout = 0
        pauseUntil(() => input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || timeout == 1))
        if (input.buttonIsPressed(Button.A)) {
            if (booinhouse > 0) {
                booinhouse += -1
            }
            basic.showIcon(IconNames.Yes)
        } else {
            booinhouse += 1
            basic.showIcon(IconNames.No)
        }
    } else {
        basic.showIcon(IconNames.Duck)
        timeout = 0
        pauseUntil(() => input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || timeout == 1))
        if (input.buttonIsPressed(Button.B)) {
            Your_kind += 1
            basic.showIcon(IconNames.Yes)
        } else {
            if (Your_kind > 0) {
                Your_kind += -1
            }
            basic.showIcon(IconNames.No)
        }
    }
    basic.pause(500)
    if (booinhouse == 0 && Your_kind >= 2) {
        userready = 0
        basic.showString("You win")
    } else if (booinhouse - Your_kind > 3) {
        userready = 0
        basic.showString("You lose")
    }
})
loops.everyInterval(3000, function () {
    timeout = 1
})
