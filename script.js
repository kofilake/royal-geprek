const navPageLinks = document.querySelectorAll('.nav-page');
const pages = document.querySelectorAll('.page');


function switchPage(targetPageId) {
    pages.forEach(page => {
        page.classList.remove('active-page');
    });

    const targetPage = document.getElementById(targetPageId);
    if (targetPage) {
        targetPage.classList.add('active-page');
    }

    navPageLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === targetPageId) {
            link.classList.add('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

navPageLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = link.dataset.page;
        switchPage(targetPage);
    });
});


function myFunction() {
  if (confirm("Redirecting to WhatsApp...")) {
    window.location.href = "https://wa.me/6287822245787"; 
  } else {
    e.preventDefault();
    return;
  }
}