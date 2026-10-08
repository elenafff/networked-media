let cat_1;
let night;
let nightMode = false;

window.onload = () => {
  console.log("page has loaded");
  cat_1 = {
    el: document.getElementById("cat-1"),
    x: 40,
    y: 70,
    dir: -1,
    speed: 0.2,
    state: "stand",
    timing: 40,
    hovered: false,
  };

  night = document.getElementById("bg-night");
  nightSwitch = document.getElementById("night-switch");
  let date = new Date();
  let hour = date.getHours();
  if (hour < 6 || hour >= 18) {
    nightMode = true;
    nightSwitch.classList.add("on");
  }
  nightSwitch.addEventListener("click", () => {
    if (nightMode === true) {
      nightMode = false;
      nightSwitch.classList.remove("on");
    } else {
      nightMode = true;
      nightSwitch.classList.add("on");
    }
  });

  cat_1.el.addEventListener("mouseenter", () => {
    cat_1.hovered = true;
    if (cat_1.state === "sleep" || cat_1.state === "sit") {
      cat_1.state = "stand";
      cat_1.el.src = "images/standing.png";
    } else {
      cat_1.state = "sit";
      cat_1.el.src = "images/sitting.png";
    }
  });

  cat_1.el.addEventListener("mouseleave", () => {
    cat_1.hovered = false;
    cat_1.timing = 40;
  });

  setInterval(() => {
    updateBackground();
    movingCat();
  }, 50);
};

function updateBackground() {
  let date = new Date();
  console.log(date.toString());

  let hour = date.getHours();
  if (hour < 6 || hour >= 18) {
    night.style.opacity = 1;
  } else {
    night.style.opacity = 0;
  }
  if (nightMode === true) {
    night.style.opacity = 1;
  } else {
    night.style.opacity = 0;
  }
}

function movingCat() {
  if (cat_1.state === "walk" || cat_1.state === "run") {
    cat_1.x = cat_1.x + cat_1.speed * cat_1.dir;
    if (cat_1.x > 80) {
      cat_1.dir = -1;
      cat_1.el.style.transform = "scaleX(1)";
    }
    if (cat_1.x < 15) {
      cat_1.dir = 1;
      cat_1.el.style.transform = "scaleX(-1)";
    }
  }
  cat_1.el.style.left = cat_1.x + "%";
  if (cat_1.hovered === false) {
    cat_1.timing = cat_1.timing - 1;
  }
  if (cat_1.timing <= 0) {
    pickNewAction();
  }
}

function pickNewAction() {
  let r = Math.random();

  if (r < 0.35) {
    cat_1.state = "walk";
    cat_1.speed = 0.2;
    cat_1.el.src = "images/walking.gif";
  } else if (r < 0.45) {
    cat_1.state = "run";
    cat_1.speed = 0.6;
    cat_1.el.src = "images/running.gif";
  } else if (r < 0.6) {
    cat_1.state = "stand";
    cat_1.el.src = "images/standing.png";
  } else if (r < 0.8) {
    cat_1.state = "sit";
    cat_1.el.src = "images/sitting.png";
  } else {
    cat_1.state = "sleep";
    cat_1.el.src = "images/sleeping.gif";
  }
  cat_1.timing = 60 + Math.random() * 100;

  if (cat_1.state === "walk" || cat_1.state === "run") {
    if (Math.random() < 0.5) {
      cat_1.dir = 1;
    } else {
      cat_1.dir = -1;
    }
  }

  if (cat_1.dir === 1) {
    cat_1.el.style.transform = "scaleX(-1)";
  } else {
    cat_1.el.style.transform = "scaleX(1)";
  }
}
