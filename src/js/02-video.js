var throttle = require('lodash.throttle');
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const checkpoint = 'vimeo-videoplayer-current-time';
const currentTime = localStorage.getItem(checkpoint) || 0;

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(currentTime);

function getCurrentTime(e) {
  localStorage.setItem(checkpoint, e.seconds);
}
