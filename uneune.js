let dif = 0
let y = 0
let yold = 0
basic.forever(() => {
    basic.clearScreen()
    basic.pause(5)
    y = Math.random(5)
    if (yold == y) {
        y += 1
        y %= 5
    }
    yold = y
    led.plot(0, y)
    dif = Math.random(3) + 2
    for (let x = 1; x <= 4; x++) {
        y += dif
        y %= 5
        led.plot(x, y)
    }
    basic.pause(25)
})
yold = 5
