
// sidebar toggling
let sidebarToggler = document.getElementById('sidebar-toggler');
sidebarToggler.addEventListener('click', toggleSidebar);




let sidebar = document.getElementById('sidebar');

// sidebar close

let closeSidebar = document.getElementById('close-sidebar');
closeSidebar.addEventListener('click', closeSidebarMenu)

function toggleSidebar (){
    if (!sidebar.classList.contains('sidebar-open')){
        sidebar.classList.add('sidebar-open'); 
}

}

function closeSidebarMenu (){
        if (sidebar.classList.contains('sidebar-open')){
            sidebar.classList.remove('sidebar-open');

    }
}

// sidebar dropdown 
let sidebarDropdown = document.querySelectorAll('.dropdown');

let sidebarLinks = document.getElementsByClassName('sidebar-link');

// declaring arrow svg 

let arrow1 = document.getElementById('arrow1')

let arrow2 = document.getElementById('arrow2')

sidebarLinks[0].addEventListener('click', openFeaturesDropdown);

function openFeaturesDropdown(){
    sidebarDropdown[0].classList.toggle('sidebar-dropdown-open');
    if (sidebarDropdown[0].classList.contains('sidebar-dropdown-open')){
        arrow1.style.transform = "rotate(180deg)";
    }else{
        arrow1.style.transform = "rotate(0deg)";
    }
}


sidebarLinks[1].addEventListener('click', openCompanyDropdown);

function openCompanyDropdown(){
    sidebarDropdown[1].classList.toggle('sidebar-dropdown-open')
    if (sidebarDropdown[1].classList.contains('sidebar-dropdown-open')){
        arrow2.style.transform = "rotate(180deg)";
    }else{
        arrow2.style.transform = "rotate(0deg)";
    }
}


