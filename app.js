
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

sidebarLinks[0].addEventListener('click', openFeaturesDropdown);

function openFeaturesDropdown(){
    sidebarDropdown[0].classList.toggle('sidebar-dropdown-open')
}


sidebarLinks[1].addEventListener('click', openCompanyDropdown);

function openCompanyDropdown(){
    sidebarDropdown[1].classList.toggle('sidebar-dropdown-open')
}
console.log(sidebarDropdown)
console.log(sidebarLinks)




