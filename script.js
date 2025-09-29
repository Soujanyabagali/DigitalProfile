document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;

      // Close other open accordion contents
      document.querySelectorAll('.accordion-content').forEach(c => {
        if(c !== content) c.style.maxHeight = null;
      });

      // Toggle current
      if(content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }

const form = document.getElementById("contact-form");
form.addEventListener("submit", function(e) {
  alert("Thank you! Your message has been sent.");
});



    });
  });
});
