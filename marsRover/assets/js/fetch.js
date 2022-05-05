//The user will enter a date.
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const userChoice = document.querySelector('input').value
  document.querySelector('input').value = '' // clears input

  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${userChoice}&api_key=2RMWPG1zptG1RB5UnvZf7WCnvVwgiUEE4SeaQqtZ&date`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data) 
        console.log(data.photos)
        let randomNum = random(0, data.photos.length -1)
        if(!data.photos.length){
          document.querySelector('#name').innerText = 'No photos for today. Please pick another date' 
        } else {
            document.querySelector('#date').innerText = `Earth Date: ${data.photos[randomNum].earth_date} | Martian Sol: ${data.photos[0].sol}` //set date in place
            document.querySelector('#name').innerText = `${data.photos[randomNum].rover.name} Rover` //set title in place
            document.querySelector('img').src = data.photos[randomNum].img_src
            document.querySelector('#description').innerText = data.photos[randomNum].camera.full_name
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
// Helper function to grab random picture + metadata
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
  }






