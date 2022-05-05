//The user will enter a date.
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const userChoice = document.querySelector('input').value
  document.querySelector('input').value = '' // clears input

  fetch(`https://api.nasa.gov/planetary/apod?api_key=2RMWPG1zptG1RB5UnvZf7WCnvVwgiUEE4SeaQqtZ&date=${userChoice}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl //set image in place
        } else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url //set video in place
        }
        console.log(data.date)
        document.querySelector('#date').innerText = data.date //set date in place
        document.querySelector('#name').innerText = data.title //set title in place
        document.querySelector('img').src = data.hdurl
        document.querySelector('#description').innerText = (data.explanation)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}







