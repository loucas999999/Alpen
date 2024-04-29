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

// Services Scroll To Section Animation

function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance){
        elements[instance].scrollIntoView({behavior: 'smooth' });
    }
}

const link1 = document.querySelector('#test');
const link2 = document.querySelector('.container__btn2');

link1.addEventListener('click', () => {
    scrollToElement('.second-section');
})

link2.addEventListener('click', () => {
    scrollToElement('.second-section');
})

// FREQUENTLY ASKED QUESTIONS 

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});




