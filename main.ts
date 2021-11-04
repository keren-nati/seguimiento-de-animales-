radio.onReceivedNumber(function (receivedNumber) {
    if (input.acceleration(Dimension.X) < -500 && input.acceleration(Dimension.Y) < -500) {
        basic.showLeds(`
            # # # # #
            # # # # .
            # # # . .
            # # . # .
            # . . . #
            `)
    } else if (input.acceleration(Dimension.X) >= 500 && input.acceleration(Dimension.Y) >= 500) {
        basic.showLeds(`
            # . . . #
            . # . # #
            . . # # #
            . # # # #
            # # # # #
            `)
    } else if (input.acceleration(Dimension.X) >= 500 && input.acceleration(Dimension.Y) < -500) {
        basic.showLeds(`
            # # # # #
            . # # # #
            . . # # #
            . # . # #
            # . . . #
            `)
    } else if (input.acceleration(Dimension.X) < -500 && input.acceleration(Dimension.Y) >= 500) {
        basic.showLeds(`
            # . . . #
            # # . # .
            # # # . .
            # # # # .
            # # # # #
            `)
    } else if (input.acceleration(Dimension.Y) < -900) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.Y) >= 400) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.X) >= 1) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.X) == 0 && input.acceleration(Dimension.Y) == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (input.acceleration(Dimension.X) < 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    } else {
    	
    }
})
radio.setGroup(7)
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.X))
    radio.sendNumber(input.acceleration(Dimension.Y))
})
