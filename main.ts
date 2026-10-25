for (let index = 0; index < 1e+73; index++) {
    basic.showString("hi")
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        # . # . .
        . . # . .
        . . # . .
        `)
    music.play(music.stringPlayable("G D A C B F E C ", 257), music.PlaybackMode.UntilDone)
    basic.showString("676767")
    music.play(music.stringPlayable("C D E C5 B E G D ", 120), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Happy)
    basic.showString("charlie")
}
