import robot from "robotjs"
import Leap from 'leapjs'
import {
    handEntry,
    handSwipe,
    handDrag,
    handFlip,
    handFist
} from 'leapjs-gesture'

Leap.Controller.plugin('handEntry', handEntry.handEntry)
Leap.Controller.plugin('handSwipe', handSwipe.handSwipe)
Leap.Controller.plugin('handDrag', handDrag.handDrag)
Leap.Controller.plugin('handFlip', handFlip.handFlip)
Leap.Controller.plugin('handFist', handFist.handFist)

Leap
    .loop((f) => {
        // console.log(f)
    })
    .use('handEntry')
    .use('handSwipe', {
        vertical: 120,
        horizontal: 120
    })
    .on('handSwipe', function (hand) {
        console.log(hand.swipeDirection)
        if (hand.swipeDirection === 'left') {
            robot.keyTap("left");
        } else if (hand.swipeDirection === 'right') {
            robot.keyTap("right");
        }
    })
    .on('handLost', function (hand) {
        if (hand)
         console.log("Lost!")
    })
   .on('handFound', function (hand) {
       if (hand)
        console.log("Found!")
   })


process.on('uncaughtException', function (err) {
    console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
    console.error(err.stack)
    process.exit(1)
  })