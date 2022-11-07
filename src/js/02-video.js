import Player from '@vimeo/player';
import { save, load } from './storage';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const videoTime = localStorage.getItem('videoplayer-current-time');

const videoTimeUpdate = throttle((event) => {
  const saveVidetoTime = save('videoplayer-current-time', event.seconds);
}, 1000);

const updateVideo = time => {
  player
    .setCurrentTime(time)
    .then(seconds => {})
    .catch(error => {
      switch (error.name) {
        case 'RangeError':
          console.log(
            'Time was less than 0 or greater than the video`s duration'
          );
          break;

        default:
          console.log('Error');
          break;
      }
    });
};

updateVideo(videoTime);
player.on('timeupdate', videoTimeUpdate);
