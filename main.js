let orangeColor = "#f4d698";
let pinkColor = "#ed9298";
let boneColor = "#f9f6ee";
let whiteColor = "#ffffff";
let greyColor = "#333333";
let greenColor = "#009849";
let skinPink = "#c18277";
let offwhiteColor = "#faf9f6";

let arrayStorage = [];

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
let IHeaderArray = [I1, I2, I3];
let IContentArray = [I1Content, I2Content, I3Content];

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
let toggleCircleStyle = document.getElementById("toggleCircle1").style;
let toggleButtonStyle = document.getElementById("toggleButton1").style;
function toggleFunction() {
  console.log(toggleCircleStyle);
  if (toggleCircleStyle.left === "") {
    toggleCircleStyle.left = "3.5vw";
    // toggleButtonStyle.backgroundColor = "rgba(193, 130, 119, 0.2)";
    toggleCircleStyle.backgroundColor = offwhiteColor;
    toggleButtonStyle.backgroundColor = skinPink;

    console.log(toggleCircleStyle.left);
  } else {
    toggleCircleStyle.left = "";
    toggleCircleStyle.backgroundColor = skinPink;
    toggleButtonStyle.backgroundColor = offwhiteColor;
  }
}
let toggleCircleStyle2 = document.getElementById("toggleCircle2").style;
let toggleButtonStyle2 = document.getElementById("toggleButton2").style;
function toggleFunction2() {
  if (toggleCircleStyle2.left === "") {
    toggleCircleStyle2.left = "3.5vw";
    // toggleButtonStyle2.backgroundColor = "rgba(0, 152, 73, 0.1)";
    toggleCircleStyle2.backgroundColor = offwhiteColor;
    toggleButtonStyle2.backgroundColor = greenColor;
  } else {
    toggleCircleStyle2.left = "";
    toggleCircleStyle2.backgroundColor = greenColor;
    toggleButtonStyle2.backgroundColor = offwhiteColor;
  }
}
let toggleCircleStyle3 = document.getElementById("toggleCircle3").style;
let toggleButtonStyle3 = document.getElementById("toggleButton3").style;
function toggleFunction3() {
  if (toggleCircleStyle3.left === "") {
    toggleCircleStyle3.left = "3.5vw";
    // toggleButtonStyle3.backgroundColor = "rgba(244, 214,152, 0.1)";
    toggleButtonStyle3.backgroundColor = orangeColor;
    toggleCircleStyle3.backgroundColor = offwhiteColor;
  } else {
    toggleCircleStyle3.left = "";
    toggleButtonStyle3.backgroundColor = offwhiteColor;
    toggleCircleStyle3.backgroundColor = orangeColor;
  }
}

// function button_click(intro_id) {
//   let currentlyClicked = document.getElementById(intro_id);
//   let currentlyOpen = document.getElementById(intro_id + "open");
//   if (currentlyClicked.classList.contains("introClickedClass")) {
//     currentlyClicked.classList.remove("introClickedClass");
//     currentlyOpen.classList.remove("introOpenClass");
//   } else {
//     for (let i = 0; i < 5; i++) {
//       if (introductionArray[i].classList.contains("introClickedClass")) {
//         introductionArray[i].classList.remove("introClickedClass");
//       } else {
//         continue;
//       }
//     }
//     for (let i = 0; i < 5; i++) {
//       if (introOpenArray[i].classList.contains("introOpenClass")) {
//         introOpenArray[i].classList.remove("introOpenClass");
//       } else {
//         continue;
//       }
//     }
//     currentlyClicked.classList.add("introClickedClass");
//     currentlyOpen.classList.add("introOpenClass");
//   }
// }

function button_click(intro_id) {
  let currentlyClicked = document.getElementById(intro_id);
  let currentlyOpen = document.getElementById(intro_id + "Content");
  if (currentlyClicked.classList.contains("IClickedClass")) {
    currentlyClicked.classList.remove("IClickedClass");
    currentlyOpen.classList.remove("IContentClickedClass");
  } else {
    for (let i = 0; i < 3; i++) {
      if (IHeaderArray[i].classList.contains("IClickedClass")) {
        IHeaderArray[i].classList.remove("IClickedClass");
      } else {
        continue;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (IContentArray[i].classList.contains("IContentClickedClass")) {
        IContentArray[i].classList.remove("IContentClickedClass");
      } else {
        continue;
      }
    }
    currentlyClicked.classList.add("IClickedClass");
    currentlyOpen.classList.add("IContentClickedClass");
  }
}

function getID() {
  if (localStorage.length === 0) {
    let data = document.forms["formID"].querySelectorAll(".f");
    let arrayContact = [].map.call(data, function (item) {
      return { name: item.name, value: item.value };
    });
    arrayStorage.push(arrayContact);
    localStorage.arrayStorage = JSON.stringify(arrayStorage);
    console.log(localStorage);
    console.log(arrayContact + "0");
  } else {
    let arrayStorage = JSON.parse(localStorage.getItem("arrayStorage"));
    // let data = document.forms["formID"].querySelectorAll("input[type='text']");
    let data = document.forms["formID"].querySelectorAll(".f");
    let arrayContact = [].map.call(data, function (item) {
      return { name: item.name, value: item.value };
    });
    arrayStorage.push(arrayContact);
    localStorage.arrayStorage = JSON.stringify(arrayStorage);
    console.log(localStorage);
    console.log(arrayContact + "1");
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
    document.getElementById("headImageClass").style.display = "none";
  }
}

document.getElementById("introductionVideo").play();
document.getElementById("case4Video").play();
window.addEventListener("scroll", pauseVideo);
