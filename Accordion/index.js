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


/*

Most people know this version:

  classList.toggle("active");

But toggle has another form:

  classList.toggle(className, force);

where force is a boolean.

It behaves like this:

    if (force) {
        classList.add(className);
    } else {
        classList.remove(className);
    }

So this:

icon.classList.toggle("accordion-icon-rotated", !isOpen);

is equivalent to:

    if (!isOpen) {
        icon.classList.add("accordion-icon-rotated");
    } else {
        icon.classList.remove("accordion-icon-rotated");
    }

*/