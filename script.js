const screens = [
    {
        image: "lizard.png",
        message: "Bu kertenkele çok üzgün.",
        button: "Neden?"
    },
    {
        image: "lizard-2.png",
        message: "Çünkü kertmeyenkelesini özledi.",
        button: "Eee şimdi nolcak?"
    },
    {
        image: "lizard-3.png",
        message: "O da bilmiyor. Kertmeyenkelesi ile görüşemiyor ama tekrar buluşacaklar.",
        button: "..."
    },
    {
        image: "lizard-4.png",
        message: "kertenkele umutlu.. ❤️",
        button: null
    }
];

let currentScreen = 0;

const lizardImage = document.querySelector("#lizard img");
const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

function showScreen() {

    lizardImage.style.opacity = "0";

    setTimeout(() => {
        lizardImage.src = screens[currentScreen].image;
        lizardImage.alt = "Kertenkele";

        lizardImage.style.opacity = "1";
    }, 200);

    message.textContent = screens[currentScreen].message;

    if (screens[currentScreen].button) {
        nextBtn.textContent = screens[currentScreen].button;
        nextBtn.style.display = "inline-block";
    } else {
        nextBtn.style.display = "none";
    }
}

nextBtn.addEventListener("click", () => {

    if (currentScreen < screens.length - 1) {
        currentScreen++;
        showScreen();
    }

});

showScreen();