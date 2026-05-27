const bouttons = document.querySelectorAll('.button');
const sections = document.querySelectorAll('.page-section');
const mode = document.querySelector('.mode');
const logo = document.querySelector('.logo');
const afficher = document.querySelector('.afficherTheme');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('lightbox-close');
const cartes = document.querySelectorAll('.pic');




console.log("Test");
console.log(bouttons.length);
console.log(afficher);

//cycle jour nuit
mode.addEventListener("click", function(){
    const currentTheme = document.documentElement.getAttribute('theme');
    
    if (currentTheme === 'dark'){
        document.documentElement.setAttribute('theme','light');
        afficher.textContent = 'Mode Sombre';
        logo.src = './assets/logo/ares_l.png'
    }else{
        document.documentElement.setAttribute('theme','dark');
        afficher.textContent = 'Mode Clair';
        logo.src = './assets/logo/ares_d.png'

    }
});

//cartes zoom
cartes.forEach (carte =>{
    carte.addEventListener('click',()=>{
        const img = carte.querySelector('img');
        if(img && lightboxImg && lightbox){
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
            document.body.classList.add('no-scroll');
        }
    });
});

if(lightboxClose){
    lightboxClose.addEventListener('click', ()=>{
        lightbox.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
}

lightbox.addEventListener('click', (clic) => {
    if(clic.target !== lightboxImg && clic.target !== lightboxClose){
        lightbox.classList.remove('active')
        document.body.classList.remove('no-scroll');
    }
});


//sections
bouttons.forEach(boutton => {
    boutton.addEventListener('click', () => {
        const cible = boutton.getAttribute('data-target');
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(cible).classList.remove('hidden');
        
    });
});

