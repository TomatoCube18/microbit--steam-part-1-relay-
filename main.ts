input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    RelayStatus = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    RelayStatus = 0
})
let RelayStatus = 0
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
pins.digitalWritePin(DigitalPin.P2, RelayStatus)
basic.showIcon(IconNames.Confused)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, RelayStatus)
})
