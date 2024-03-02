document.querySelector(".humburger_bars").addEventListener("click", () => {
    document.querySelector(".menu_list").style.top = 0;
  });
  document.querySelector(".humburger_cross").addEventListener("click", () => {
    document.querySelector(".menu_list").style.top = "-700%";
  });
  document.querySelector(".humburger_bars").addEventListener("touchstart", () => {
    document.querySelector(".menu_list").style.top = 0;
  });
  document.querySelector(".humburger_cross").addEventListener("touchstart", () => {
    document.querySelector(".menu_list").style.top = "-700%";
  });