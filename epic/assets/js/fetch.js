//The user will enter a date.
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const userChoice = document.querySelector('input').value
  console.log(userChoice)
  document.querySelector('input').value = '' // clears input
  
  fetch(`https://api.nasa.gov/EPIC/api/natural/date/${userChoice}?api_key=2RMWPG1zptG1RB5UnvZf7WCnvVwgiUEE4SeaQqtZ`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        } else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        }
        console.log(data.date)
        console.log(data[0])
        console.log(data[0].image)
        document.querySelector('#name').innerText = `${data[0].caption} on ${data[0].date.slice(0, 10)}`
        newUserChoice = userChoice.split('-').join('/')
        console.log(userChoice)
        console.log(data[0].centroid_coordinates.lat)
        document.querySelector('#myImage').src = `https://epic.gsfc.nasa.gov/archive/natural/${newUserChoice}/png/${data[0].image}.png`
        document.querySelector('#description').innerText = `Latitude: ${data[0].centroid_coordinates.lat} | Longitude: ${data[1].centroid_coordinates.lat}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}






