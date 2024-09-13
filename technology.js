document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Check localStorage for the user's dark mode preference
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    toggle.checked = true;
  }

  // Add event listener for the toggle switch
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "enabled");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("dark-mode", "disabled");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("fa fa-search");
  const searchBar = document.getElementById("search-bar");
  const closeSearch = document.getElementById("close-search");

  // Show search bar when search icon is clicked
  searchIcon.addEventListener("click", () => {
    searchBar.classList.add("show");
    searchBar.querySelector("input").focus(); // Focus the input field
  });

  // Hide search bar when close button is clicked
  closeSearch.addEventListener("click", () => {
    searchBar.classList.remove("show");
  });

  // Optional: Hide search bar if clicking outside
  document.addEventListener("click", (e) => {
    if (!searchBar.contains(e.target) && e.target !== searchIcon) {
      searchBar.classList.remove("show");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const subscribeIcon = document.getElementById("fa fa-envelope-square");
  const subscribeForm = document.getElementById("subscribe-form");
  const closeSubscribe = document.getElementById("close-subscribe");

  // Show subscription form when subscribe icon is clicked
  subscribeIcon.addEventListener("click", () => {
    subscribeForm.classList.add("show");
    subscribeForm.querySelector("input").focus(); // Focus the email input field
  });

  // Hide subscription form when close button is clicked
  closeSubscribe.addEventListener("click", () => {
    subscribeForm.classList.remove("show");
  });

  document.onkeyup = function (e) {
    // console.log(e);
    if (e.key === "Escape") {
      subscribeForm.classList.remove("show");
    }
  };
  // Optional: Hide subscription form if clicking outside
  document.addEventListener("click", (e) => {
    if (!subscribeForm.contains(e.target) && e.target !== subscribeIcon) {
      subscribeForm.classList.remove("show");
    }
  });
});
let list = document.querySelector(".fa-globe-asia");
console.log(list);

list.onclick = function () {
  list.classList.add("active");
};
list.onclick = function () {
  this.parentElement.classList.remove("active");
};
let menu = document.getElementById("menu");
let toggler = document.querySelector(".toggler");
let close = document.querySelector(".close");

toggler.onclick = function () {
  menu.classList.add("open");
};

close.onclick = function () {
  menu.classList.remove("open");
};

document.onkeyup = function (e) {
  if (e.key === "Escape") {
    menu.classList.remove("open");
  }
};
