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
    form.addEventListener("submit", async function(e) {
      e.preventDefault();

      const formData = new FormData(form);
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      try {
        const response = await fetch(window.location.href, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        });

        if (response.ok) {
          alert("Thank you! Your message has been sent.");
          form.reset();
        } else {
          throw new Error("Submission failed. Please try again.");
        }
      } catch (error) {
        alert("Error sending message: " + error.message);
      } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    });
  }
});
