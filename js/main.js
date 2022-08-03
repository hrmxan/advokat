try {
  let sidebar = document.querySelector('.sidebar');
  let closeSidebar = document.querySelector('.closeSidebar');
  let openSidebar = document.querySelector('.colapse__button');
  openSidebar.addEventListener('click', function() {
    sidebar.classList.remove('close');
  } );
  closeSidebar.addEventListener('click', function() {
    sidebar.classList.add('close');
  } );
} catch (e) {}