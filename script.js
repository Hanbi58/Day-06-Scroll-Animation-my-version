const divs = document.querySelectorAll("div");

window.addEventListener("scroll", checkDivs);

checkDivs();

function checkDivs() {
  const triggerBottom = window.innerHeight * 0.8;

  divs.forEach((div) => {
    const boxTop = div.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      div.classList.add("show");
    } else {
      div.classList.remove("show");
    }
  });
}
