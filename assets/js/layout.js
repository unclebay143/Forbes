// Hamburger function to open and close the nav-links
    // give the hamburger yellow background on open

const navbarToggle = () =>{
    const hamburger = document.getElementById('hamburger');
    const navLinkWrapper = document.getElementById('nav-link-wrapper');
    if(navLinkWrapper.style.display === 'none'){
        navLinkWrapper.style.display = 'block';
        hamburger.style.background = '#ccc333';
        
    }else{
        navLinkWrapper.style.display = 'none';
        hamburger.style.background = '#ffffff';
    }
};

// Access to DOM
const searchModal = document.getElementById('search-modal');
const searchButton = document.getElementById('search-opener');
const searchCloseIcon = document.getElementById('close-search-modal');
const hamburgerButton = document.getElementById('hamburger-btn');




const openSearchModal = () =>{
    searchModal.style.display = 'block';
}

const closeSearchModal = () =>{
    if(searchModal.style.display === 'none'){
        searchModal.style.display = 'block';
    }else{
        searchModal.style.display = 'none'
    }
}


// EventListener
hamburgerButton.addEventListener('click', navbarToggle);
searchButton.addEventListener('click', openSearchModal)
searchCloseIcon.addEventListener('click', closeSearchModal);