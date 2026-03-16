function showContent(section) {
    const homeContent = document.getElementById('home');
    const aboutContent = document.getElementById('about');
    const contactContent = document.getElementById('contact');

    if(section === 'home') {
        homeContent.style.display = 'block';
        aboutContent.style.display = 'none';
        contactContent.style.display = 'none';
    }
    else if(section === 'about') {
        homeContent.style.display = 'none';
        aboutContent.style.display = 'block';
        contactContent.style.display = 'none';
    }
    else if(section === 'contact') {
        homeContent.style.display = 'none';
        aboutContent.style.display = 'none';
        contactContent.style.display = 'block';
    }

}