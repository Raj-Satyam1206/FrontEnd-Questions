document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector(".accordion-icon");

      const isOpen = content.classList.contains("active");

      // Toggle content visibility
      content.classList.toggle("active");

      // Toggle chevron icon rotation
      icon.classList.toggle("accordion-icon-rotated", !isOpen);
    });
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const headers = document.querySelectorAll(".accordion-header");

//   headers.forEach((header) => {
//     header.addEventListener("click", () => {
//       const content = header.nextElementSibling;
//       const icon = document.querySelector(".accordion-icon");


//       const isOpen = content.classList.contains("active");


//       content.classList.toggle("active");
//       icon.classList.toggle("accordion-icon-rotated", !isOpen);
//     });
//   });
// });

