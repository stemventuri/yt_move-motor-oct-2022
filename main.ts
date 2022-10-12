radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 40)
        moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange))
        moveMotorZIP.show()
    } else if (receivedNumber == 2) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 40)
        moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Purple))
        moveMotorZIP.show()
    } else if (receivedNumber == 3) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Right, 40)
        moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
        moveMotorZIP.show()
        basic.pause(100)
    } else if (receivedNumber == 4) {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, 40)
        moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
        moveMotorZIP.show()
        basic.pause(100)
    } else if (receivedNumber == 5) {
        Kitronik_Move_Motor.stop()
    } else if (receivedNumber == 6) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 40)
        for (let index = 0; index < 4; index++) {
            moveMotorZIP.showRainbow(1, 360)
            moveMotorZIP.rotate(1)
            moveMotorZIP.show()
        }
        basic.pause(100)
        Kitronik_Move_Motor.stop()
    }
})
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
basic.showIcon(IconNames.Happy)
radio.setGroup(34)
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
for (let index = 0; index < 8; index++) {
    moveMotorZIP.showRainbow(1, 360)
    moveMotorZIP.rotate(1)
    moveMotorZIP.show()
}
