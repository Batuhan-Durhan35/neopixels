input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.showIcon(IconNames.Happy)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.showIcon(IconNames.Yes)
