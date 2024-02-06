/**=====================Show Menu=============================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/**=====================Menu Show=============================*/

if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/**=====================Hide Menu=============================*/

if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

/**=====================Remove menu mobile=============================*/

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/**=====================Add blur to header=============================*/

const blurHeader = ()=>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('blur-header')
  :header.classList.remove('blur-header')

}

window.addEventListener('scroll', blurHeader)

/*============================Email JS===================================== */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e)=>{
  e.preventDefault()
  emailjs.sendForm('service_yzofhxd', 'template_oso1i3n', '#contact-form', '1CYlpmoZmDhx6hVZN')
  .then(()=>{
    //show sent message
    contactMessage.textContent = 'Message sent successfully ✅';

    setTimeout(()=>{
      contactMessage.textContent = ''

    }, 5000)
    contactForm.reset();

  }, ()=>{
    contactMessage.textContent = 'Message not sent (service error) ❌';
    setTimeout(()=>{
      contactMessage.textContent = ''

    }, 5000)

    contactForm.reset();
  })
}

contactForm.addEventListener('submit', sendEmail)


/*============================Show scroll up===================================== */

const scrollUp = ()=>{
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >=350 ? scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll')

}

window.addEventListener('scroll', scrollUp);

/*============================Scroll section active link===================================== */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
      


    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

/*============================Scroll reveal animation===================================== */
const sr= ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 50,
  //reset: true,
})

sr.reveal('.home__data, .home__social, .contact__container, .footer__container')
sr.reveal('.home__image', {origin: 'bottom'})
sr.reveal('.about__data, .skills__data', {origin: 'left'})
sr.reveal('.about__image, .skills__content', {origin: 'right'})
sr.reveal('.service__card, .projects__card ', {interval:100})



