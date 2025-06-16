function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

loadComponent("navbar", "/components/navbar.html");
loadComponent("sidenav", "/components/sidenav.html");
loadComponent("footer", "/components/footer.html");