document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  // Add click event listeners to category buttons
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");

      // Update active button
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Show/hide gallery items
      galleryItems.forEach((item) => {
        if (category === "all" || item.getAttribute("data-category") === category) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  });

  // Trigger "All" category by default
  document.querySelector('[data-category="all"]').click();
});
