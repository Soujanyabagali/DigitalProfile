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
    });
  });

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      emailjs.sendForm('service_1xc2fwi', 'template_e4g8ro9', this)
        .then(() => {
          alert("Thank you! Your message has been sent.");
          form.reset();
        }, (error) => {
          alert("Error sending message: " + error.text);
        })
        .finally(() => {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        });
    });
  }
});
