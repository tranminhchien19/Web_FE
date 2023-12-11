// Check window is loaded then call function Init
window.addEventListener('load', Init)

function Init() {
    const header = document.querySelector("#header")
    const content = document.querySelector(".carousel-inner") 
    const backToTopBtn = document.querySelector(".back-to-top-btn")

    if (window.scrollY >= 30) { 
        header.classList.add('scroll') 
    }  
    // Add event scroll and when scroll > 20px add class to header and back to top button 
    window.addEventListener('scroll', function() {  
        if (window.scrollY >= 20) { 
            header.classList.add('scroll')  
            content.style.paddingTop = 'var(--header-heigh)'
            backToTopBtn.classList.add('show')
        } else  {
            header.classList.remove('scroll')
            content.style.paddingTop = '0' 
            backToTopBtn.classList.remove('show')   
        }
    })
}
