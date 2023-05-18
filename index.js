// Code your solution in this file!



function distanceFromHqInBlocks(block){
    return Math.abs(block - 42)
}
//   1) returns a distance in blocks
//   2) returns a distance in blocks
//   3) calculates distances below 42nd street
function distanceFromHqInFeet(block){
    return Math.abs(block - 42) * 264
}
//   4) returns a distance in feet
//   5) returns a distance in feet
//   6) calculates distances below 42nd street

function distanceTravelledInFeet(start, end){
    return Math.abs((start - end) * 264)
}
//   7) returns the distance travelled in feet
//   8) returns a distance in feet
//   9) returns distance when destination is below distance
function calculatesFarePrice(start, destination){
    let result;
    if ((Math.abs(start - destination) * 264) <= 400)
        result = 0
    else if (((Math.abs(start - destination) * 264) > 400) && ((Math.abs(start - destination) * 264) <= 2000))
        result = (((Math.abs(start - destination) * 264) - 400) * .02)
    else if ((Math.abs(start - destination) * 264) > 2000 && ((Math.abs(start - destination) * 264) < 2500))
        result = 25
    else result = "cannot travel that far"
    return result
}
//   10) gives customers a free sample
//   11) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
//   12) charges 25 dollars for a distance over 2000 feet
//   13) does not allow rides over 2500 feet

