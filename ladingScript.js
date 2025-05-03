document.addEventListener('DOMContentLoaded', function() {
    const scrollToMoreButton = document.getElementById('scrollToMoreButton');
    const more = document.getElementById('more');
  
    scrollToMoreButton.addEventListener('click', function() {
      more.scrollIntoView({ behavior: 'smooth' });
    });
  });