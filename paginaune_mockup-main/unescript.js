// SELECTORS

let slider = document.querySelector(".slider");
let wrapper = slider.querySelector(".slider-image-wrapper");
let controls = slider.querySelector(".slider-controls");
let controlsLeft = controls.querySelector(".slider-control-left");
let controlsRight = controls.querySelector(".slider-control-right");

// GLOBAL VARIABLES

let sliderItems = Array.from(wrapper.children);
let currentIndex = 0;

// CONTROLLS

controlsLeft.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = sliderItems.length - 1;
  previousSlide(currentIndex);
});
controlsRight.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= sliderItems.length) currentIndex = 0;
  nextSlide(currentIndex);
});

// AUTOMATIC SLIDER

let sliderDelay = 3000;

setInterval(() => {
  currentIndex++;
  if (currentIndex >= sliderItems.length) currentIndex = 0;
  nextSlide(currentIndex);
}, sliderDelay);

// FUNCTIONS

function resetStyles() {
  sliderItems.forEach((item, index) => {
    item.style.animationName = "none";
    item.style.zIndex = "-10";
  });
}

function selectSlide(index) {
  resetStyles();

  let previous = sliderItems[currentIndex];
  previous.style.zIndex = "-9";

  let current = sliderItems[index];
  current.style.animation = `fade-in 0.4s ease`;
  current.style.zIndex = "-8";

  //Update currentIndex
  currentIndex = index;
}

function nextSlide(index) {
  resetStyles();
  //Put previous behind
  let previous = sliderItems[index - 1] || sliderItems[sliderItems.length - 1];
  previous.style.zIndex = "-9";

  let current = sliderItems[index];
  current.style.animation = `fade-in 0.4s ease`;
  current.style.zIndex = "-8";
}

function previousSlide(index) {
  resetStyles();
  //Put next behind
  let next = sliderItems[index + 1] || sliderItems[0];
  next.style.zIndex = "-9";

  let current = sliderItems[index];
  current.style.animation = `fade-in 0.4s ease`;
  current.style.zIndex = "-8";
}

// DROPDOWN

//This is horrible code, I wasnt even thinking at this point

const $dropdowns = document.querySelectorAll(".dropdown");

$dropdowns.forEach(($dropdown) => {
  const $desc = $dropdown.querySelector(".dropdown-desc");
  const $list = $dropdown.querySelector(".dropdown-list");

  let firstTime = 0;

  $desc.addEventListener("click", (e) => {
    if ($list.style.display == "none" || firstTime === 0) {
      closeEveryDropdown();
      $list.style.display = "block";
      firstTime++;
    } else {
      $list.style.display = "none";
    }
  });
});

const closeEveryDropdown = () => {
  $dropdowns.forEach(($dropdown) => {
    const $list = $dropdown.querySelector(".dropdown-list");
    $list.style.display = "none";
  });
};
