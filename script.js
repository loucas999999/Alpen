// Scroll In Animations

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); 

// Services Scroll Animation

function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance){
        elements[instance].scrollIntoView({behavior: 'smooth' });
    }
}

const link1 = document.querySelector('#test');

link1.addEventListener('click', () => {
    scrollToElement('.second-section');
})

// HOVER OVER BOXES OPACITY 

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');

  box1.addEventListener('mouseenter', () => box2.style.opacity = '0.5');
  box1.addEventListener('mouseenter', () => box3.style.opacity = '0.5');
  box1.addEventListener('mouseenter', () => box4.style.opacity = '0.5');
  box1.addEventListener('mouseleave', () => box2.style.opacity = '1');
  box1.addEventListener('mouseleave', () => box3.style.opacity = '1');
  box1.addEventListener('mouseleave', () => box4.style.opacity = '1');

  box2.addEventListener('mouseenter', () => box1.style.opacity = '0.5');
  box2.addEventListener('mouseenter', () => box3.style.opacity = '0.5');
  box2.addEventListener('mouseenter', () => box4.style.opacity = '0.5');
  box2.addEventListener('mouseleave', () => box1.style.opacity = '1');
  box2.addEventListener('mouseleave', () => box3.style.opacity = '1');
  box2.addEventListener('mouseleave', () => box4.style.opacity = '1');

  box3.addEventListener('mouseenter', () => box1.style.opacity = '0.5');
  box3.addEventListener('mouseenter', () => box2.style.opacity = '0.5');
  box3.addEventListener('mouseenter', () => box4.style.opacity = '0.5');
  box3.addEventListener('mouseleave', () => box1.style.opacity = '1');
  box3.addEventListener('mouseleave', () => box2.style.opacity = '1');
  box3.addEventListener('mouseleave', () => box4.style.opacity = '1');

  box4.addEventListener('mouseenter', () => box1.style.opacity = '0.5');
  box4.addEventListener('mouseenter', () => box3.style.opacity = '0.5');
  box4.addEventListener('mouseenter', () => box2.style.opacity = '0.5');
  box4.addEventListener('mouseleave', () => box1.style.opacity = '1');
  box4.addEventListener('mouseleave', () => box3.style.opacity = '1');
  box4.addEventListener('mouseleave', () => box2.style.opacity = '1');

// FREQUENTLY ASKED QUESTIONS 

// document.addEventListener('DOMContentLoaded', function () {
//     const questions = document.querySelectorAll('.question');
  
//     questions.forEach(function(question) {
//       question.addEventListener('click', function() {
//         const answer = this.nextElementSibling
//         answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
//       });
//     });
//   });

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});




