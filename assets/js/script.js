'use strict';



// warm the cache for lazy images on hidden pages once the first page has
// loaded, so switching pages doesn't fetch and decode them mid-animation
window.addEventListener("load", function () {
  const warmImages = function () {
    document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
      new Image().src = img.src;
    });
  };
  if ("requestIdleCallback" in window) {
    requestIdleCallback(warmImages, { timeout: 3000 });
  } else {
    setTimeout(warmImages, 1500);
  }
});



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation: the URL hash picks the page (#about, #resume, ...),
// so pages can be linked to directly and the back button works
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
const defaultPage = "about";

const showPage = function (name) {
  const exists = Array.prototype.some.call(pages, function (page) {
    return page.dataset.page === name;
  });
  if (!exists) name = defaultPage;

  pages.forEach(function (page) {
    page.classList.toggle("active", page.dataset.page === name);
  });

  navigationLinks.forEach(function (link) {
    const isCurrent = link.getAttribute("href") === "#" + name;
    link.classList.toggle("active", isCurrent);
    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

window.addEventListener("hashchange", function () {
  showPage(location.hash.slice(1));
  window.scrollTo(0, 0);
});

if (location.hash) showPage(location.hash.slice(1));


// portfolio screenshot lightbox
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImg = document.querySelector("[data-lightbox-img]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");

if (lightbox && typeof lightbox.showModal === "function") {

  document.querySelectorAll("[data-lightbox-trigger]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const thumb = link.querySelector("img");
      const title = link.querySelector(".project-title");
      lightboxImg.src = link.href;
      lightboxImg.alt = thumb ? thumb.alt : "";
      lightboxCaption.textContent = title ? title.textContent : "";
      lightbox.showModal();
    });
  });

  document.querySelector("[data-lightbox-close]").addEventListener("click", function () { lightbox.close(); });

  // clicking the dimmed area around the picture closes it (Esc is handled by <dialog>)
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) lightbox.close();
  });

  // drop the old picture so it doesn't flash when the next one opens
  lightbox.addEventListener("close", function () { lightboxImg.removeAttribute("src"); });

}
