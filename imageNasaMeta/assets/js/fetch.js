//The user will enter a date.
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  fetch('https://images-api.nasa.gov/search?media_type=image')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let listLen = random(0, data.collection.items.length - 1)
        // if(data.media_type === 'image'){
        //   document.querySelector('img').src = data.hdurl //set image in place
        // } else if(data.media_type === 'video'){
        //   document.querySelector('iframe').src = data.url //set video in place
        // }
        console.log(data.collection.items[0].href)
        console.log(data.collection.items[listLen].links[0].href)
        // document.querySelector('#date').innerText = data.date //set date in place
        document.querySelector('#name').innerText = data.collection.items[listLen].data[0].location //set title in place
        document.querySelector('img').src = data.collection.items[listLen].links[0].href
        // document.querySelector('#description').innerText = (data.explanation)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// Helper function to grab random picture + metadata
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
  }





