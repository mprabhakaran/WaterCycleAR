const condensation = document.getElementById('conden');
const video = document.getElementById('video');

condensation.addEventListener('click',()=>{
    video.setAttribute('src','./condensation.mp4');
})

const percipitation = document.getElementById('perci');
percipitation.addEventListener('click',()=>{
    video.setAttribute('src','./percipitation.mp4');
})

const evaporation = document.getElementById('evap');
evaporation.addEventListener('click',()=>{
    video.setAttribute('src','./evaporation.mp4');
})