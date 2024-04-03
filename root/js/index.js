document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.querySelector('.toggle-play');
    var isPaused = false;

    toggleButton.addEventListener('click', function() {
        isPaused = !isPaused;
        if (isPaused) {
            toggleButton.classList.remove('play');
        } else {
            toggleButton.classList.add('play');
        }
    });
});

var banners = ["./img/destaque-home.png", "./img/destaque-home-2.png"];
var bannerAtual = 0;
var timer;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.destaque .banner-img').src = banners[bannerAtual];
}
timer = setInterval(trocaBanner, 1000);

var toggleButton = document.querySelector('.toggle-play');

toggleButton.onclick = function() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    } else {
        timer = setInterval(trocaBanner, 1000);
    }
    return true;
};
