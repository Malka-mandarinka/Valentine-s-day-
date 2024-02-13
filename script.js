"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

function sendEmailNotification(noButton, noCount) {
        var recipientEmail = 'elena.yaneva04@gmail.com';
              var subject = 'Button Click Notification';
                var body = 'User clicked ' + buttonClicked + '. Number of times clicked: ' + noCount;
                  var body = 'User clicked ' + buttonClicked + '. Number of times clicked: ' + noCount;
                      MailApp.sendEmail({
                                                to: recipientEmail,
                                                                              subject: subject,
                                                        body: body,})}

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", handleNoClick);

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");

  //send email notification
sendEmailNotification ('Yes', 0)
}

function handleNoClick() {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }

    // Send email notification
    sendEmailNotification('No', noCount);
  }
}
function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
