const mobileListItems = document.querySelectorAll(".mobile-nav-list li");

mobileListItems.forEach((item) =>
  item.addEventListener("click", (e) => {
    const navToggler = document.querySelector("#mobile-list-checkbox");
    navToggler.checked = false;
    const navbar = document.querySelector("header");
    navbar.classList.remove("opened", "scrolled");
    document.querySelector("body").style.overflowY = "visible";
  })
);

window.addEventListener("scroll", (e) => {
  const navbar = document.querySelector("header");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else navbar.classList.remove("scrolled");
});

const navToggle = () => {
  const checkbox = document.getElementById("mobile-list-checkbox");
  const navbar = document.querySelector("header");
  if (checkbox.checked) {
    navbar.classList.add("scrolled", "opened");
    document.querySelector("body").style.overflowY = "hidden";
  } else {
    document.querySelector("body").style.overflowY = "visible";
    navbar.classList.remove("scrolled", "opened");
  }
};

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("DOMContentLoaded", (e) => {
  console.log(window.location.pathname);

  const navBlackPages = ["register.html", "schedule.html"];

  if (navBlackPages.includes(window.location.pathname.split("/")[1])) {
    document.querySelector("header").classList.add("scrolled");
  }
});

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   autoplay: true, // Enable auto-scroll
//   autoplayTimeout: 5000,
//   dots: false,
//   // nav: true,
//   responsive: {
//     0: {
//       items: 1,
//     },
//     600: {
//       items: 1,
//     },
//     1000: {
//       items: 1,
//     },
//   },
// });

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

const openVideoOverlay = (linkId) => {
  console.log(linkId);
  document.querySelector(
    "#overlay-player .video-container"
  ).innerHTML = `<iframe
    width="100%"
    height="375"
    src="https://www.youtube.com/embed/${linkId}"
    frameborder="0"
    allowfullscreen></iframe>`;
};

const closeOverlayPlayer = () => {
  document.querySelector("#overlay-player").style.display = "none";
  document.querySelector("iframe").remove();
};

document.querySelectorAll("button.openvideobutton").forEach((button) => {
  button.addEventListener("click", (e) => {
    document.querySelector("#overlay-player").style.display = "grid";
    openVideoOverlay(e.target.dataset.videoLink);
  });
});
