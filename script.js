window.addEventListener("load", () => {
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closePopup");

  // Show popup when page loads
  popup.classList.remove("hidden");

  // Close popup when button clicked
  closeBtn.addEventListener("click", () => {
    console.log ("Close button clicked");
    popup.classList.add("hidden");
  });

  // Optional: close popup if user clicks outside the box
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.add("hidden");
    }
  });
});

const navLinks = document.querySelectorAll('nav a');
const current = window.location.pathname.split('/').pop();
console.log("Current page:", current);

navLinks.forEach(link => {
  if (link.getAttribute('href') === current) {
    link.classList.add('active');
  }
});