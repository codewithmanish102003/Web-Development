// enum weatherConditions{
//     Sunny,
//     Cloudy,
//     Rainy,
//     Snowy,
// }

// console.log(weatherConditions.Cloudy);  //1


enum weatherConditions{
    Sunny="sunny",
    Cloudy="cloudy",
    Rainy="rainy",
    Snowy="snowy",
}

console.log(`The weather is ${weatherConditions.Cloudy}`);