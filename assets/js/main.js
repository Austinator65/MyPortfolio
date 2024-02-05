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
  }, ()=>{
    contactMessage.textContent = 'Message not sent (service error) ❌';
    setTimeout(()=>{
      contactMessage.textContent = ''

    }, 5000)
  })
}

contactForm.addEventListener('submit', sendEmail)


