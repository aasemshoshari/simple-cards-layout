navBtn = document.querySelector(".nav-btn");
logo = document.querySelector(".logo");
Parent = document.querySelector(".navbar-nav");
navBtn.addEventListener("click", () => {
  logo.classList.toggle("hide");
});

const handelOverOut = function (e) {
  if (e.target.classList.contains("link")) {
    const link = e.target;
    const siblings = link.closest(".navbar-nav").querySelectorAll(".link");

    siblings.forEach((el) => {
      if (el == link) el.style.borderBottom = this;
    });
  }
};
Parent.addEventListener("mouseover", handelOverOut.bind("2px solid orange"));
Parent.addEventListener("mouseout", handelOverOut.bind("none"));
