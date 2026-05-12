input.onPinPressed(TouchPin.P0, function () {
	
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.clearScreen()
})
basic.forever(function () {
	
})
