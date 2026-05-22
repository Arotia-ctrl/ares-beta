const bouttons = document.querySelectorAll('.button');
const sections = document.querySelectorAll('.page-section');
const mode = document.querySelector('.mode');
const logo = document.querySelector('.logo');
const afficher = document.querySelector('.afficherTheme');
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

