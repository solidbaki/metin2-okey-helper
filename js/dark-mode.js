var body = document.body;

const darkModeSwitch = () => {
  if (dark) {
    body.data_bs_theme = "dark";
  } else {
    body.data_bs_theme = "";
  }
};

$(document).ready(function () {
  $('.form-switch input[type="checkbox"]').on("change", function () {
    if (document.body.getAttribute("data-bs-theme") == "dark")
      document.body.setAttribute("data-bs-theme", "");
    else if (document.body.getAttribute("data-bs-theme") == "")
      document.body.setAttribute("data-bs-theme", "dark");
  });
});
