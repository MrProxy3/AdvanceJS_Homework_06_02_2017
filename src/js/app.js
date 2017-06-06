var form = document.forms.mainForm;

var accountForm = form.accountForm;
var socialForm = form.socialForm;
var personalForm = form.personalForm;

var nextShowPage2 = document.getElementById("nextBtn1");
var nextShowPage3 = document.getElementById("nextBtn2");
var prevShowPage1 = document.getElementById("prevBtn1");
var prevShowPage2 = document.getElementById("prevBtn2");



nextShowPage2.addEventListener("click", function (e) {
    animateForms(socialForm, accountForm);
});

nextShowPage3.addEventListener("click", function (e) {
    animateForms(personalForm, socialForm);
});

prevShowPage1.addEventListener("click", function (e) {
    animateForms(accountForm, socialForm);
});

prevShowPage2.addEventListener("click", function (e) {
    animateForms(socialForm, personalForm);
});

function animateForms(nextPage, prevPage) {
    nextPage.style.opacity = "1";
    nextPage.style.zIndex = "1";
    nextPage.style.marginLeft = "0";

    prevPage.style.opacity = "0";
    prevPage.style.zIndex = "0";
    prevPage.style.marginLeft = "-10%";
}