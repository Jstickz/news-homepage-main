const openSidebar = document.querySelector(".open-sidebar");
const closeSidebar = document.querySelector(".close-sidebar");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

// Open side bar EventListener
openSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
});
