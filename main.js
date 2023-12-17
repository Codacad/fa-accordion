document.addEventListener('DOMContentLoaded', () => {  
  const menus = document.querySelectorAll('div.menu h1')  
  let iconToggle = true
  menus.forEach(menu => {    
    menu.onclick = (e) => {            
      menu.nextElementSibling.classList.toggle('toggle-accordian-dropdown')
      if(menu.nextElementSibling.classList.contains('toggle-accordian-dropdown')){                        
        menu.querySelector('span.plun-minus-icon').innerHTML = '<img src="./assets/images/icon-minus.svg" alt="" />'                
      } else {       
        menu.querySelector('span.plun-minus-icon').innerHTML = '<img src="./assets/images/icon-plus.svg" alt="" />'              
      }
      menu.querySelector('img').style.transition = "all 300ms ease-in-out"
    }    
  })
})