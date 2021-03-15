
// problem 1
// async function getRandomNumber() {
//     let promise= new Promise(resolve => {
//           setTimeout(() => {
//             resolve(Math.random());
//           }, 500);
//         });
//    let result= await promise;
//    alert(result);
// }
// getRandomNumber();



// Write an asynchronous function that accepts 1 parameter
// A city name
// When invoked, this function should use geocode.xyz's API retrieve the city data, which uses a URL formatted as follows:
// https://geocode.xyz/seattle?json=1
// Once retrieved, print to the console the latitude and longitude
// Invoke your async function with a few cities as a test


async function city(cityName) {
    
    // create a variable that goes ahead and fetches the link  (sub value indicated through ${})
    const response = await fetch(`https://geocode.xyz/${cityName}?json=1`)
    // create a variable that awaits its conversion to a json file
    
    const info = await response.json();
    //print out a line that has text and coords     \n is a break, it makes it look nice
    alert("\nThe latitude is: " + info.longt + ".\n\nThe longitude is: " + info.latt);
  }
  //input a city!
  city("omaha");
  
