let orangeColor = "#cf5c36";
let pinkColor = "#ed9298";
let boneColor = "#f9f6ee";
let whiteColor = "#ffffff";
let greyColor = "#333333";

let caseOneContainer = document.getElementById("caseOneID");
let caseTwoContainer = document.getElementById("caseTwoID");
let caseThreeContainer = document.getElementById("caseThreeID");
let caseFourContainer = document.getElementById("caseFourID");

let caseOneArticle = document.getElementById("caseOneIDArticle");
let caseTwoArticle = document.getElementById("caseTwoIDArticle");
let caseThreeArticle = document.getElementById("caseThreeIDArticle");
let caseFourArticle = document.getElementById("caseFourIDArticle");

let caseContainerArray = [
  caseOneContainer,
  caseTwoContainer,
  caseThreeContainer,
  caseFourContainer,
];

let caseArticleArray = [
  caseOneArticle,
  caseTwoArticle,
  caseThreeArticle,
  caseFourArticle,
];

let jesusID = document.getElementById("jesusID");
let mindID = document.getElementById("mindID");
let nationalityID = document.getElementById("nationalityID");
let lingoID = document.getElementById("lingoID");
let contactID = document.getElementById("contactID");

let jesusIDopen = document.getElementById("jesusIDopen");
let mindIDopen = document.getElementById("mindIDopen");
let nationalityIDopen = document.getElementById("nationalityIDopen");
let lingoIDopen = document.getElementById("lingoIDopen");
let contactIDopen = document.getElementById("contactIDopen");

let introductionArray = [jesusID, mindID, nationalityID, lingoID, contactID];
let introOpenArray = [
  jesusIDopen,
  mindIDopen,
  nationalityIDopen,
  lingoIDopen,
  contactIDopen,
];

function reply_click(clicked_id) {
  let currentCaseContainer = document.getElementById(clicked_id);
  let currentCaseArticle = document.getElementById(clicked_id + "Article");
  if (currentCaseContainer.classList.contains("caseContainerClicked")) {
    currentCaseContainer.classList.remove("caseContainerClicked");
    currentCaseArticle.classList.remove("caseArticleOpen");
  } else {
    for (let i = 0; i < 3; i++) {
      if (caseContainerArray[i].classList.contains("caseContainerClicked")) {
        caseContainerArray[i].classList.remove("caseContainerClicked");
      } else {
        continue;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (caseArticleArray[i].classList.contains("caseArticleOpen")) {
        caseArticleArray[i].classList.remove("caseArticleOpen");
      } else {
        continue;
      }
    }
    currentCaseContainer.classList.add("caseContainerClicked");
    currentCaseArticle.classList.add("caseArticleOpen");
  }
}

function button_click(intro_id) {
  let currentlyClicked = document.getElementById(intro_id);
  let currentlyOpen = document.getElementById(intro_id + "open");
  if (currentlyClicked.classList.contains("introClickedClass")) {
    currentlyClicked.classList.remove("introClickedClass");
    currentlyOpen.classList.remove("introOpenClass");
  } else {
    for (let i = 0; i < 5; i++) {
      if (introductionArray[i].classList.contains("introClickedClass")) {
        introductionArray[i].classList.remove("introClickedClass");
      } else {
        continue;
      }
    }
    for (let i = 0; i < 5; i++) {
      if (introOpenArray[i].classList.contains("introOpenClass")) {
        introOpenArray[i].classList.remove("introOpenClass");
      } else {
        continue;
      }
    }
    currentlyClicked.classList.add("introClickedClass");
    currentlyOpen.classList.add("introOpenClass");
  }
}

function pauseVideo() {
  if (
    document.body.scrollTop > 140 ||
    document.documentElement.scrollTop > 140
  ) {
    document.getElementById("introductionVideo").pause();
    document.getElementById("introductionVideo").style.display = "none";
    document.getElementById("headImageClass").style.display = "block";
  } else {
    document.getElementById("introductionVideo").style.display = "block";
    document.getElementById("introductionVideo").play();
  }
}

document.getElementById("introductionVideo").play();
document.getElementById("case4Video").play();
window.addEventListener("scroll", pauseVideo);
