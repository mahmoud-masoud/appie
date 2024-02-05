const plansContainer = document.querySelector('.plans');
const freshPlanPrice = document.querySelector('.fresh-price');
const sweetPlanPrice = document.querySelector('.sweet-price');
const juicyPlanPrice = document.querySelector('.juicy-price');
const monthlyBtn = document.querySelector('.monthly');
const yearlyBtn = document.querySelector('.yearly');

const plansPrices = [freshPlanPrice, sweetPlanPrice, juicyPlanPrice];

const monthlyPlansPrices = [4, 16, 27];
const yearlyPlansPrices = [36, 144, 243];

// set active style to monthly plan button
monthlyBtn.className = 'price-btn-active';

const updateYearlySubscriptionPrice = () => {
  plansPrices.forEach((planPrice, index) => {
    planPrice.textContent = yearlyPlansPrices[index];
    planPrice.nextElementSibling.textContent = 'yearly';
  });
  yearlyBtn.className = 'price-btn-active';
  monthlyBtn.className = 'price-btn';
};
const updateMonthlySubscriptionPrice = () => {
  plansPrices.forEach((planPrice, index) => {
    planPrice.textContent = monthlyPlansPrices[index];
    planPrice.nextElementSibling.textContent = 'monthly';
  });
  monthlyBtn.className = 'price-btn-active';
  yearlyBtn.className = 'price-btn ';
};

yearlyBtn.addEventListener('click', updateYearlySubscriptionPrice);
monthlyBtn.addEventListener('click', updateMonthlySubscriptionPrice);
