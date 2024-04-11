document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.star');
  
    stars.forEach(star => {
      star.addEventListener('click', function() {
        const ratingValue = this.getAttribute('data-title');
        document.getElementById('ratingInfo').innerText = `You rated: ${ratingValue}`;
      });
    });
  });
  