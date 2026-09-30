const photos = {
  cone: {
    image: "images/cone.jpg",
    alt: "Golden retriever wearing a recovery cone"
  },

  toy: {
    image: "images/toy.jpg",
    alt: "Golden retriever looking at a toy"
  },

  happy: {
    image: "images/happy.jpg",
    alt: "Golden retriever relaxing outside"
  }
};

const stories = [
  {
    label: "01",
    title: "A Rough Day Gets Better",
    sequence: [
      {
        photo: photos.cone,
        title: "Not his best afternoon.",
        description: "Sometimes the day begins a little differently than expected."
      },
      {
        photo: photos.toy,
        title: "Then something catches his eye.",
        description: "A familiar toy makes the afternoon a little more interesting."
      },
      {
        photo: photos.happy,
        title: "Back to his usual self.",
        description: "By the end of the day, the difficult moment already feels far away."
      }
    ]
  },

  {
    label: "02",
    title: "A Good Day Takes a Turn",
    sequence: [
      {
        photo: photos.happy,
        title: "Everything seems perfect.",
        description: "A quiet afternoon outside with absolutely nothing to worry about."
      },
      {
        photo: photos.toy,
        title: "One last distraction.",
        description: "There is always time to investigate something interesting."
      },
      {
        photo: photos.cone,
        title: "Well... maybe not.",
        description: "The afternoon ends a little differently than expected."
      }
    ]
  }
];

let currentStory = 0;
let currentPhoto = 0;

const storyImage = document.querySelector("#story-image");
const storyTitle = document.querySelector("#story-title");
const storyLabel = document.querySelector("#story-label");
const captionTitle = document.querySelector("#caption-title");
const captionDescription = document.querySelector("#caption-description");
const counter = document.querySelector("#counter");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
const switchButton = document.querySelector("#switch-story");
const progressDots = document.querySelectorAll(".progress-dot");

function displayPhoto() {
  const story = stories[currentStory];
  const item = story.sequence[currentPhoto];

  storyImage.src = item.photo.image;
  storyImage.alt = item.photo.alt;
  storyTitle.textContent = story.title;
  storyLabel.textContent = story.label;
  captionTitle.textContent = item.title;
  captionDescription.textContent = item.description;
  counter.textContent = `0${currentPhoto + 1} / 03`;

  progressDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentPhoto);
  });
}

function nextPhoto() {
  currentPhoto = (currentPhoto + 1) % 3;
  displayPhoto();
}

function previousPhoto() {
  currentPhoto = (currentPhoto - 1 + 3) % 3;
  displayPhoto();
}

function switchStory() {
  currentStory = currentStory === 0 ? 1 : 0;
  currentPhoto = 0;
  displayPhoto();
}

nextButton.addEventListener("click", nextPhoto);
previousButton.addEventListener("click", previousPhoto);
switchButton.addEventListener("click", switchStory);

displayPhoto();