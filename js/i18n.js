let currentLanguage = "tr";

window.addEventListener("load", (event) => {
  translateTexts();
});

const dropdown = document.getElementById("languageSelect");
dropdown.addEventListener("change", function () {
  translateTexts();
});

const translateTexts = () => {
  var selectedValue = dropdown.value;
  currentLanguage = selectedValue;
  console.log("Selected Value:", selectedValue);

  document.title = i18n.title[currentLanguage];

  const mainHeader = document.getElementById("mainHeader");
  mainHeader.innerText = i18n.mainHeader[currentLanguage];

  const darkModeLabel = document.getElementById("darkModeLabel");
  darkModeLabel.innerText = i18n.darkMode[currentLanguage];
}

const i18n = {
  mainHeader: {
    tr: "Metin2 Okey Event Yardımcısı",
    eng: "Metin2 Okey Event Helper",
    de: "Metin2 Okey Event Helfer",
  },
  darkMode: {
    tr: "Gece modu",
    eng: "Dark Mode",
    de: "Dunkelmodus",
  },
  title: {
    tr: "Metin2 Okey Event Yardımcısı",
    eng: "Metin2 Okey Event Helper",
    de: "Metin2 Okey Event Helfer",
  },
};
