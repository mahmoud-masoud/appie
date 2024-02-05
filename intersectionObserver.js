const statisticsCards = document.querySelectorAll('.card');
const statisticsNumbers = document.querySelectorAll('.stc-num');
const heroSection = document.querySelector('.hero-section');
const header = document.querySelector('.header');

const heroSectionObserver = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

heroSectionObserver.observe(heroSection);

const cardsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation');
      entry.target.style.animationDelay = entry.target.dataset.delay;
      observer.disconnect();
    }
  });
});

statisticsCards.forEach((card) => {
  cardsObserver.observe(card);
});

const numbersObservers = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const number = +entry.target.textContent;
      let counter = 0;
      const interval = setInterval(() => {
        if (number > 200) {
          entry.target.textContent = counter += 5;
        } else {
          entry.target.textContent = counter++;
        }
        if (counter > number) {
          clearInterval(interval);
          observer.disconnect();
        }
      }, 10);
    }
  });
});

statisticsNumbers.forEach((num) => {
  numbersObservers.observe(num);
});
