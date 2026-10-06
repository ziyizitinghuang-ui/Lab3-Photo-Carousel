let currentImage = 0;
let currentStory = 1;

const storyImage = document.getElementById("storyImage");
const step = document.getElementById("step");
const captionTitle = document.getElementById("captionTitle");
const captionText = document.getElementById("captionText");
const counter = document.getElementById("counter");

const storyOneButton = document.getElementById("storyOne");
const storyTwoButton = document.getElementById("storyTwo");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const storyOneImages = [
    "images/waiting.jpg",
    "images/looking.jpg",
    "images/running.png"
];

const storyOneTitles = [
    "So Bored...",
    "Wait... What Was That?",
    "Finally Outside!"
];

const storyOneTexts = [
    "I wish we could go outside.",
    "Did I hear someone coming?",
    "Out playing with my big brother!"
];

const storyTwoImages = [
    "images/running.png",
    "images/looking.jpg",
    "images/waiting.jpg"
];

const storyTwoTitles = [
    "Playtime!",
    "Back Home",
    "Nap Time"
];

const storyTwoTexts = [
    "Running around outside with my big brother.",
    "That was fun... but I'm getting tired.",
    "Time to curl up with my favorite toy."
];

const steps = [
    "BEGINNING",
    "MIDDLE",
    "END"
];

function showImage() {

    if (currentStory === 1) {
        storyImage.src = storyOneImages[currentImage];
        captionTitle.innerHTML = storyOneTitles[currentImage];
        captionText.innerHTML = storyOneTexts[currentImage];
    }

    if (currentStory === 2) {
        storyImage.src = storyTwoImages[currentImage];
        captionTitle.innerHTML = storyTwoTitles[currentImage];
        captionText.innerHTML = storyTwoTexts[currentImage];
    }

    step.innerHTML = steps[currentImage];
    counter.innerHTML = currentImage + 1 + " / 3";
}

function nextImage() {

    currentImage = currentImage + 1;

    if (currentImage > 2) {
        currentImage = 0;
    }

    showImage();
}

function previousImage() {

    currentImage = currentImage - 1;

    if (currentImage < 0) {
        currentImage = 2;
    }

    showImage();
}

function showStoryOne() {

    currentStory = 1;
    currentImage = 0;

    storyOneButton.classList.add("active");
    storyTwoButton.classList.remove("active");

    showImage();
}

function showStoryTwo() {

    currentStory = 2;
    currentImage = 0;

    storyTwoButton.classList.add("active");
    storyOneButton.classList.remove("active");

    showImage();
}

nextButton.addEventListener("click", nextImage);
previousButton.addEventListener("click", previousImage);

storyOneButton.addEventListener("click", showStoryOne);
storyTwoButton.addEventListener("click", showStoryTwo);

showImage();