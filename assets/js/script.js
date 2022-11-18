let twitter = document.getElementById('twitter');
let dribbble = document.getElementById('dribbble');
let rss = document.getElementById('rss');

twitter.addEventListener("click", message)
dribbble.addEventListener("click", message)
rss.addEventListener("click", message)

function message(){
    alert("Désolé, je n'ai pas ce réseau.");
}