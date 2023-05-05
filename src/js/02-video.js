import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const frame = document.querySelector('iframe');
const player = new Player(frame);
const tiempoVideo = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(tiempoVideo).then().catch((error) => {
    switch (error.name) {
        case 'RangeError':
            console.log('Error de rango');
            break;

        default:
            console.log('Error');
            break;
    }
});

player.on('timeupdate', throttle(() => {
    player.getCurrentTime().then((seconds) => {
        localStorage.setItem("videoplayer-current-time", seconds)
    }).catch((error) => {
        console.log('Ha ocurrido un error!');
    });
}, 1000));
