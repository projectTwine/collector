const google = require('googleapis');
const rp = require ('request-promise');
const fetch = require('node-fetch');

const API_KEY = 'AIzaSyB4yeaiYcdGqJkzJRFvuduc79CZu2VC92c';

async function getYouTubeCaptions() {
  try {
    const result = await fetch(`https://www.googleapis.com/youtube/v3/captions?videoId=M7FIvfx5J10&part=snippet&key=${API_KEY}`);
    console.log(result);
  } catch (error) {
    console.warn(error);
  }
}

getYouTubeCaptions();


