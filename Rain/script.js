function raining(){
    const rain = document.createElement('div');
    rain.classList.add('rain');
    rain.innerText = '💧';

    rain.style.left = Math.random() * 100 + 'vw';

    rain.style.animationDuration = Math.random() * 1 + 2 + "s";

    document.body.appendChild(rain);
}

setInterval(raining, 50);