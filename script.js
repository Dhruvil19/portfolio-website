document.addEventListener('DOMContentLoaded', function() {
  const typewriterElement = document.querySelector('.typewriter');
  const text = typewriterElement.getAttribute('data-text');
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      typewriterElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Popup confirmation message
  if (confirm("Are you sure you want to submit this form?")) {
    // If user confirms, submit the form
    this.submit();
  }
});