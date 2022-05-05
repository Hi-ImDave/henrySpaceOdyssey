//The user will enter a date.
window.addEventListener('load', getApodThumb)
window.addEventListener('load', getEpicThumb)
// window.addEventListener('load', getMarsThumb)
// window.addEventListener('load', getNasaImg)



function getApodThumb(){
  fetch(`https://api.nasa.gov/planetary/apod?api_key=2RMWPG1zptG1RB5UnvZf7WCnvVwgiUEE4SeaQqtZ`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#apodThumb').src = data.hdurl
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
function getEpicThumb(){
  fetch(`https://api.nasa.gov/EPIC/api/natural/date/?api_key=2RMWPG1zptG1RB5UnvZf7WCnvVwgiUEE4SeaQqtZ`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#epicThumb').src = data[1].image
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
function getMarsThumb(){
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2022-04-11&api_key=2RMWPG1zptG1RB5UnvZf7WCnvVwgiUEE4SeaQqtZ&date`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data) 
        let randomNum = random(0, data.photos.length -1)
        document.querySelector('#marsThumb').src = data.photos[randomNum].img_src 
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getNasaImg(){
  fetch('https://images-api.nasa.gov/search?media_type=image')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let listLen = random(0, data.collection.items.length - 1)
        document.querySelector('metaThumb').src = data.collection.items[listLen].links[0].href
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//helper function to grab random num within a range
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
  }

//helper function to grab current date
const currentDay = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0') - 3;
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = yyyy + '/' + mm + '/' + dd;
  return today
}








