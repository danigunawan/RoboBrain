const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'ab9f18e9276a4f9b94f742a30c3f3103'
})

app.models
.predict('a403429f2ddf4b49b307e318f00e528b', 'https://samples.clarifai.com/face-det.jpg')
// .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
.then( function(response) {
    console.log(response);
  },
  function(err) {
    console.log(err);
  }
);