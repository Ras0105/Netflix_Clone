  const slider = document.getElementById('slider');
  const leftBtn = document.querySelector('.slide-btn.left');
  const rightBtn = document.querySelector('.slide-btn.right');
  const scrollAmount = 640; // change this to fit your card width + gap

  function scrollLeft() {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  }

  function scrollRight() {
    slider.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }

  function updateButtonVisibility() {
    const scrollLeftValue = slider.scrollLeft;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    leftBtn.style.display = scrollLeftValue <= 0 ? 'none' : 'block';
    rightBtn.style.display = scrollLeftValue >= maxScroll - 5 ? 'none' : 'block';
  }

  // Update visibility on scroll and after clicking
  slider.addEventListener('scroll', updateButtonVisibility);
  rightBtn.addEventListener('click', () => {
    scrollRight();
    setTimeout(updateButtonVisibility, 400); // Wait for scroll to finish
  });
  leftBtn.addEventListener('click', () => {
    scrollLeft();
    setTimeout(updateButtonVisibility, 400);
  });

  // On load
  window.addEventListener('load', updateButtonVisibility);
