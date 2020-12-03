input.onButtonPressed(Button.A, function () {
    bird.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    bird.turn(Direction.Right, 90)
})
input.onButtonPressed(Button.B, function () {
    bird.move(1)
})
let bird: game.LedSprite = null
bird = game.createSprite(0, 2)
let food = game.createSprite(2, 2)
food.set(LedSpriteProperty.Brightness, 80)
basic.forever(function () {
    if (bird.isTouching(food)) {
        game.addScore(1)
        food.delete()
        food = game.createSprite(randint(0, 10), randint(0, 10))
        game.startCountdown(30000)
        food.set(LedSpriteProperty.Brightness, 80)
    }
})
