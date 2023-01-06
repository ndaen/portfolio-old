const sidebar = document.querySelector('.sidebar')
const sidebarToogleBtn = document.querySelector('.sidebar-toggle')
const main = document.querySelector('.main')
const left = document.querySelectorAll('.container.left')
const last = document.querySelector('.container.last')
const right = document.querySelectorAll('.container.right')
const timeline_title = document.querySelectorAll('.timeline-title')

sidebarToogleBtn.onclick = (e) => {
    e.preventDefault()
    sidebar.classList.toggle('sidebar-small')
    main.classList.toggle('main-large')
    last.classList.toggle('last-big')
    for(let i = 0; i< timeline_title.length; i++){
      timeline_title[i].classList.toggle('timeline-title-big')
    }
    for(let i = 0; i< left.length; i++){
      left[i].classList.toggle('left-big')
    }
    for(let i = 0; i< right.length; i++){
      right[i].classList.toggle('right-big')
    }
    right.classList.toggle('right-big')
}
window.onresize = () => {
    if(window.innerWidth < 600){
        sidebar.classList.add('sidebar-small')
        main.classList.add('main-large')
        left.classList.add('left-big')
    }else{
        sidebar.classList.remove('sidebar-small')
        main.classList.remove('main-large')
        left.classList.remove('left-big')
    }
}


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.getAttribute("value") === pages[i].dataset.page) {
        pages[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
      }
    }

  });
}