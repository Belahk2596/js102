console.log("Good weather we're having today init?");
let weatherDegrees;
weatherDegrees = 30;
if (weatherDegrees >= 25) {
  console.log(
    `The temperature for today is ${weatherDegrees} degrees, I sugguest you wear Shorts.`
  );
} else if (weatherDegrees >= 15) {
  console.log(
    `The temperature for today is ${weatherDegrees} degrees, I sugguest you wear Jumper.`
  );
} else {
  console.log(
    `The temperature for today is ${weatherDegrees} degrees, I sugguest you wear a Jacket.`
  );
}
