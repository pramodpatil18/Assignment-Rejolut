let sectionsCancelLogo = document.getElementById("sectionsCancelLogo");
let mainSectionsContainer = document.getElementById("mainSectionsContainer");
let dataContainer = document.getElementById("dataContainer");
let backLogo = document.getElementById("backLogo");
let smProfileOptionsContainer = document.getElementById("smProfileOptionsContainer");
let smProfileCloseIcon = document.getElementById("smProfileCloseIcon");
let smProfile = document.getElementById("smProfile");
let qrCodeIcon = document.getElementById("qrCodeIcon");
let qrCodeContainer = document.getElementById("qrCodeContainer");
let balanceInfoParagraph = document.getElementById("balanceInfoParagraph");
let balanceInfoIcon = document.getElementById("balanceInfoIcon");
let lgNavToProfile = document.getElementById("lgNavToProfile");
let lgProfileCard = document.getElementById("lgProfileCard");
let payoutInfoParagraph = document.getElementById("payoutInfoParagraph");
let payoutInfoIcon = document.getElementById("payoutInfoIcon");
let warningCancelIcon = document.getElementById("warningCancelIcon");
let warningContainer = document.getElementById("warningContainer");
let lgNavBackToSection = document.getElementById("lgNavBackToSection");

lgNavBackToSection.onclick = function() {
    lgProfileCard.classList.add("d-none");
    lgNavToProfile.classList.remove("d-none");
    lgNavBackToSection.classList.add("d-none");
    qrCodeContainer.classList.add("d-none");
    balanceInfoParagraph.classList.add("d-none");
    payoutInfoParagraph.classList.add("d-none");
}
warningCancelIcon.onclick = function() {
    warningContainer.classList.remove("d-md-block");
}
payoutInfoIcon.onclick = function() {
    qrCodeContainer.classList.add("d-none")
    balanceInfoParagraph.classList.add("d-none")
    payoutInfoParagraph.classList.toggle("d-none");
    lgProfileCard.classList.add("d-none");
}
lgNavToProfile.onclick = function() {
    lgNavToProfile.classList.add("d-none");
    lgProfileCard.classList.remove("d-none");
    lgNavBackToSection.classList.remove("d-none");
    qrCodeContainer.classList.add("d-none");
    balanceInfoParagraph.classList.add("d-none");
    payoutInfoParagraph.classList.add("d-none");
}
balanceInfoIcon.onclick = function() {
    qrCodeContainer.classList.add("d-none");
    balanceInfoParagraph.classList.toggle("d-none");
    payoutInfoParagraph.classList.add("d-none");
}
qrCodeIcon.onclick = function() {
    qrCodeContainer.classList.toggle("d-none");
    balanceInfoParagraph.classList.add("d-none");
    payoutInfoParagraph.classList.add("d-none");
}
smProfile.onclick = function() {
    smProfileOptionsContainer.classList.remove("d-none");
    dataContainer.classList.add("d-none");
}
smProfileCloseIcon.onclick = function() {
    smProfileOptionsContainer.classList.add("d-none")
    dataContainer.classList.remove("d-none");
}
backLogo.onclick = function() {
    mainSectionsContainer.classList.remove("d-none");
    dataContainer.classList.add("d-none");
}
sectionsCancelLogo.onclick = function() {
    mainSectionsContainer.classList.add("d-none");
    dataContainer.classList.remove("d-none");
}