const heroSection = document.querySelector('.hero-section');
const header = document.querySelector('.header');
const statisticsCards = document.querySelectorAll('.card');
const statisticsNumbers = document.querySelectorAll('.stc-num');
const sponsorsBoxes = document.querySelectorAll('.sponsor-box');
const featuresImg = document.querySelector('.f-img-box');
const heroImg = document.querySelector('.hero-img-box');
const heroContent = document.querySelector('.hero-content');

const heroHeading = heroContent.querySelector('h1');
const heroText = heroContent.querySelector('p');
const heroForm = heroContent.querySelector('form');
const heroFeedbacks = heroContent.querySelector('.feedbacks');
const heroElements = [heroHeading, heroText, heroForm, heroFeedbacks];

const sectionHowCards = document.querySelectorAll('.section-how-card');

const aboutImg = document.querySelector('.about-img-box');
const aboutText = document.querySelector('.about-text');
const aboutRow = document.querySelector('.about-row');

const features = document.querySelectorAll('.feature');
const sweetPlan = document.querySelector('.sweet');

const navOptions = {
  root: null,
  threshold: 0,
};

const heroSectionObserver = new IntersectionObserver((entries) => {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}, navOptions);

heroSectionObserver.observe(heroSection);

const defaultObserverOptions = {
  threshold: 0.5,
  rootMargin: '50px 0px',
};

const applyAnimation = (items, animationClass, delay = 0) => {
  const itemsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        if (delay) {
          entry.target.style.animationDelay = index * delay + 's';
        }

        entry.target.classList.add(animationClass);

        itemsObserver.unobserve(entry.target);
      }
    });
  }, defaultObserverOptions);

  if (items.length) {
    items.forEach((item) => {
      itemsObserver.observe(item);
    });
  } else {
    itemsObserver.observe(items);
  }
};
console.log(aboutRow.children);

applyAnimation(heroImg, 'slide-in');
applyAnimation(heroElements, 'fade-in', 0.2);
applyAnimation(sectionHowCards, 'fade-in', 0.2);
applyAnimation(aboutImg, 'fade-in');
applyAnimation(aboutText, 'fade-in');
applyAnimation([...aboutRow.children], 'about-row-animation', 0.2);

applyAnimation(statisticsCards, 'card-animation', 0.3);
applyAnimation(sponsorsBoxes, 'sponsor-box-animations', 0.15);
applyAnimation(featuresImg, 'fade-in');
applyAnimation(features, 'animated-feature', 0.3);
applyAnimation(sweetPlan, 'sweet-plan-animations');
