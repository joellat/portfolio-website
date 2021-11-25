let caseOneContainer = document.getElementById("caseOneID");
let caseTwoContainer = document.getElementById("caseTwoID");
let caseThreeContainer = document.getElementById("caseThreeID");
let caseFourContainer = document.getElementById("caseFourID");
let caseFiveContainer = document.getElementById("caseFiveID");

let caseOneArticle = document.getElementById("caseOneIDArticle");
let caseTwoArticle = document.getElementById("caseTwoIDArticle");
let caseThreeArticle = document.getElementById("caseThreeIDArticle");
let caseFourArticle = document.getElementById("caseFourIDArticle");
let caseFiveArticle = document.getElementById("caseFiveIDArticle");

let caseContainerArray = [
  caseOneContainer,
  caseTwoContainer,
  caseThreeContainer,
  caseFourContainer,
  caseFiveContainer,
];

let caseArticleArray = [
  caseOneArticle,
  caseTwoArticle,
  caseThreeArticle,
  caseFourArticle,
  caseFiveArticle,
];

function reply_click(clicked_id) {
  let currentCaseContainer = document.getElementById(clicked_id);
  let currentCaseArticle = document.getElementById(clicked_id + "Article");
  if (currentCaseContainer.classList.contains("caseContainerClicked")) {
    currentCaseContainer.classList.remove("caseContainerClicked");
    currentCaseArticle.classList.remove("caseArticleOpen");
  } else {
    for (let i = 0; i < 4; i++) {
      if (caseContainerArray[i].classList.contains("caseContainerClicked")) {
        caseContainerArray[i].classList.remove("caseContainerClicked");
      } else {
        continue;
      }
    }
    for (let i = 0; i < 4; i++) {
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
  let buttonElement = document.getElementById(intro_id);
  buttonElement.style.color = "$orange-color";
  buttonElement.style.borderColor = "$orange-color";
  let buttonElementOpen = document.getElementById(intro_id + "open");
  buttonElementOpen.style.display = "block";
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

function casesOpacity() {
  let windowWidth = window.innerWidth;
  let caseWidth = (windowWidth / 10) * 3;
  console.log(document.documentElement.scrollTop);
  console.log(
    document.getElementById("headImageClass").clientHeight + caseWidth
  );
  if (
    document.documentElement.scrollTop >=
    document.getElementById("headImageClass").clientHeight
  ) {
    document.getElementById("caseOneID").classList.add("caseContainerVisible");
  }
  if (
    document.documentElement.scrollTop >=
    document.getElementById("headImageClass").clientHeight + caseWidth
  ) {
    document.getElementById("caseTwoID").classList.add("caseContainerVisible");
  }
  if (
    document.documentElement.scrollTop >=
    document.getElementById("headImageClass").clientHeight + 2 * caseWidth
  ) {
    document
      .getElementById("caseThreeID")
      .classList.add("caseContainerVisible");
  }
  if (
    document.documentElement.scrollTop >=
    document.getElementById("headImageClass").clientHeight + 3 * caseWidth
  ) {
    document.getElementById("caseFourID").classList.add("caseContainerVisible");
  }
}

// let windowHeight = window.innerHeight;
// let videoHeight = document.getElementById("introductionVideo").clientHeight;
// console.log(videoHeight);
// console.log(windowHeight);
// if (videoHeight > windowHeight) {
//   let newMargin = videoHeight - windowHeight;
//   console.log(newMargin);
//   let newMarginTopBottom = newMargin / 2;
//   console.log(newMarginTopBottom);
//   document.getElementById("introductionVideo").style.marginTop =
//     -newMargin + "px";
// }

// function newCircle() {
//   let circleParent = document.getElementById("circleParent");
//   let circleTwo = document.createElement("div");
//   circleParent.appendChild(circleTwo);
//   let circleSize = 0;
//   if (lastScrollPosition - currentScrollPosition > 0) {
//     circleSize -= 8;
//   } else {
//     circleSize += 8;
//   }
//   if (
//     offset + maxPinkCircle <=
//     document.documentElement.scrollTop + circleWidthHalf
//   ) {
//     if (circleSize < maxPinkCircle) {
//       circleTwo.style.backgroundColor = "$pink-color";
//       circleTwo.style.height = circleSize + "px";
//       circleTwo.style.width = circleSize + "px";
//     } else {
//       newCircle();
//     }
//   }
// }

// let scrollCounter = 0;
// let lastScrollPosition = document.documentElement.scrollTop;
// let currentScrollPosition = document.documentElement.scrollTop;
// console.log(currentScrollPosition);
// console.log(lastScrollPosition);
// let pinkCircleSize = 0;
// let windowWidth = window.innerWidth;
// let maxPinkCircle = (windowWidth / 10) * 4;
// let circleWidthHalf = (windowWidth / 10) * 2;
// let pinkCircle = document.getElementById("pinkCircle");
// console.log(maxPinkCircle);
// function checkWhiteCircle() {
//   currentScrollPosition = document.documentElement.scrollTop;
//   scrollCounter++;
//   if (lastScrollPosition - currentScrollPosition > 0) {
//     pinkCircleSize -= 8;
//   } else {
//     pinkCircleSize += 8;
//   }
//   if (
//     offset <= document.body.scrollTop + circleWidthHalf ||
//     offset <= document.documentElement.scrollTop + circleWidthHalf
//   ) {
//     if (pinkCircleSize < maxPinkCircle) {
//       pinkCircle.style.height = pinkCircleSize + "px";
//       pinkCircle.style.width = pinkCircleSize + "px";
//     } else {
//       newCircle();
//     }
//   } else {
//     if (offset > document.documentElement.scrollTop - circleWidthHalf) {
//       pinkCircle.style.height = "0px";
//       pinkCircle.style.width = "0px";
//       pinkCircleSize = 0;
//     } else if (document.documentElement.scrollTop > offset + maxPinkCircle) {
//       pinkCircle.style.height = maxPinkCircle + "px";
//       pinkCircle.style.width = maxPinkCircle + "px";
//     }
//   }
//   lastScrollPosition = document.documentElement.scrollTop;
// }
document.getElementById("introductionVideo").play();
document.getElementById("case4Video").play();
window.addEventListener("scroll", pauseVideo);
window.addEventListener("scroll", casesOpacity);
// window.addEventListener("scroll", checkWhiteCircle);
// let bodyRect = document.getElementById("body").getBoundingClientRect();
// let whiteRect = document.getElementById("whiteCircle").getBoundingClientRect();
// let offset = whiteRect.top - bodyRect.top;
// console.log(offset);
