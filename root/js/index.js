document.addEventListener('DOMContentLoaded', function () {
    function validaBusca() {
        if (document.querySelector('#q').value === '') {
            alert('Não podia ter deixado em branco a busca!');
            return false;
        }
    }
    document.querySelector('#form-busca').addEventListener('submit', validaBusca);
});

var banners = ["./img/destaque-home.png", "./img/destaque-home-2.png"];
var bannerAtual = 0;
var timer;

function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('.destaque .banner-img').src = banners[bannerAtual];
}
timer = setInterval(trocaBanner, 1000);

var pauseButton = document.querySelector('.pause');
var playButton = document.querySelector('.play');

pauseButton.onclick = function() {
    clearInterval(timer);
    return true;
};

playButton.onclick = function() {
    timer = setInterval(trocaBanner, 1000);
    return true;
};