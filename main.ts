controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`banana`, simonato, -100, 0)
    animation.runImageAnimation(
    simonato,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f f e e e e e f . f f 
        . . f d b f e e f f e e f . e f 
        . f f d d f e f f e e e f . e f 
        . f f f f f f e b b f e f f e f 
        . f d d f e e e d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f d d d d d e e f . . . . 
        . . f f f d d f f d e f f . . . 
        . c d d e e d d d d e d d f . . 
        . c c d d d d c d d e d f f f . 
        . c d c c c c d d d e d f b d f 
        . . c d d d d d d e e f f d d f 
        . . . c d d d d e e f f e f f f 
        . . . . f f f e e f e e e f . . 
        . . . . f e e e e e e e f f f . 
        . . . f e e e e e e f f f e f . 
        . . f f e e e e f f f f f e f . 
        . f b d f e e f b b f f f e f . 
        . f d d f e e f d d b f f f f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f d d d d d d e f . . . . 
        . . f d f f d d f f d f f . . . 
        . c d d d e e d d d d e d f . . 
        . c d c d d d d c d d e f f . . 
        . c d d c c c c d d d e f f f f 
        . . c d d d d d d d e f f b d f 
        . . . c d d d d e e f f f d d f 
        . . . . f f f e e f e e e f f f 
        . . . . f e e e e e e e f f f . 
        . . . f e e e e e e f f f e f . 
        . . f f e e e e f f f f f e f . 
        . f b d f e e f b b f f f e f . 
        . f d d f f f f d d b f f f f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . . f d d d d d e e f f . . . . 
        . c d d d f f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c f f d d c d d e e b d c . . . 
        f d d f e f f f e e e f . . . . 
        f d d f e e e f f f f f . . . . 
        f f f f f e e e e e f f . f f . 
        . f f f e f f e e e f f . e f . 
        . f b d f e f f b b f f f e f . 
        . f d d f e e f d d b f f e f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . . f d d f d d e e f f . . . . 
        . c d d d f d d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c f f f f d d d e e f c f . . . 
        . f b d f f f e e e e f . . . . 
        . f d d f e f f f e e f . . . . 
        . . f f f e e e e f f f . f f . 
        . . f e e f e e e e f f . e f . 
        . f f e e e f f f f f f f e f . 
        . f b d f e e f b b f f f e f . 
        . f d d f f e e d d b f f f f . 
        . f f f f f f f f f f f f f . . 
        `],
    100,
    false
    )
})
let benedetta: Sprite = null
let projectile: Sprite = null
let simonato: Sprite = null
scene.setBackgroundImage(assets.image`road`)
simonato = sprites.create(assets.image`tommy`, SpriteKind.Player)
simonato.setPosition(155, 65)
controller.moveSprite(simonato, 70, 70)
simonato.setStayInScreen(true)
game.onUpdateInterval(randint(500, 1500), function () {
    benedetta = sprites.create(img`
        ........................
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb55555bcc555555c
        ......cb555555555c55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb1bbbc.
        ....ccd55ddddd5bbbb335c.
        ...ccbdddddddd5bbbb335c.
        .ccccddddddddd55bbb335c.
        cdcccdddddb55bb5bb3335c.
        cddbddddddb555bb5b3335c.
        cddddddddddb5555b53335c.
        ccddddddbd55bb55c5555c..
        .ccddddbbbdd55cccbccc...
        ...ccbbbcbddddccdddc....
        .....ccccdd555dccccc....
        ........cccccccc........
        `, SpriteKind.Enemy)
    benedetta.setPosition(0, randint(20, 100))
    benedetta.setVelocity(50, 0)
})
