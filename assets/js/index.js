function showGallery() {

    document.getElementById("main-btn").style.display = "none";
    const gallery = document.getElementById("gallery").getElementsByTagName("img");
    
    for (let i = 0; i < gallery.length; i++) {

        gallery[i].style.display = "block";
    };
};

function playRelaxSong() {
    var music = document.getElementById("relaxMusic");
    music.play();
};

function showImages () {

    const elements = document.getElementsByTagName("img");

    for (let i = 0; i < elements.length; i++) {
        console.log(i)
        elements[i].src = "assets/images/penguin.gif";
        elements[i].setAttribute("width", "240px");
    };
};


