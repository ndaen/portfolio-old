const sidebar = document.querySelector('.sidebar')
const sidebarToogleBtn = document.querySelector('.sidebar-toggle')
const main = document.querySelector('.main')
const left = document.querySelectorAll('.container.left')
const last = document.querySelector('.container.last')
const right = document.querySelectorAll('.container.right')
const timeline_title = document.querySelectorAll('.timeline-title')

if(window.location.pathname === '/' | window.location.pathname === '/index.html' ){

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
  // window.onresize = () => {
  //     if(window.innerWidth < 600){
  //         sidebar.classList.add('sidebar-small')
  //         main.classList.add('main-large')
  //         left.classList.add('left-big')
  //     }else{
  //         sidebar.classList.remove('sidebar-small')
  //         main.classList.remove('main-large')
  //         left.classList.remove('left-big')
  //     }
  // }
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

if(document.referrer !==  window.location.href){
  for (let j = 0; j < pages.length; j++) {
    if ( 'projets' === pages[j].dataset.page) {
      pages[j].classList.add("active");
      window.scrollTo(0, 0);
    } else {
      pages[j].classList.remove("active");
    }
  }
}

if(window.location.pathname === '/' | window.location.pathname === '/index.html'){
  // add event to all nav link
  for (let i = 0; i < navigationLinks.length; i++) {

    navigationLinks[i].addEventListener("click", function () {

      for (let j = 0; j < pages.length; j++) {
        if (this.getAttribute("value") === pages[j].dataset.page) {
          
          pages[j].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[j].classList.remove("active");
        }
      }

    });
  }
}

if(window.location.pathname === '/' | window.location.pathname === '/index.html'){
  const filter = document.querySelectorAll("[data-filter-link]")
  let project = document.querySelectorAll("#project-item")
  let project2 = project
  
  
  for (let i = 0; i < filter.length; i++){
    filter[i].addEventListener("click", function() {
      
      for(let k = 0; k <filter.length; k++){
        if(filter[k] != filter[i]){
          filter[k].classList.remove('active')
        }else{
          filter[k].classList.add('active')
        }
      }
  
      for(let j =0; j < project.length; j++){
        dataGrp = project[j].getAttribute('data-group')
        if (filter[i].getAttribute('value') == 'all'){
          project[j].classList.add('project-item-active')
          project[j].classList.remove('project-item-disactive')
        }else{
          if (dataGrp != filter[i].getAttribute('value')){
          project[j].classList.add('project-item-disactive')
          project[j].classList.remove('project-item-active')
        }else{
          project[j].classList.add('project-item-active')
          project[j].classList.remove('project-item-disactive')
        }
        }
        
      }
  
    })
  }
}