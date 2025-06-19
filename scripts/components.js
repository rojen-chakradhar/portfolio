function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

function injectFlowersToAll() {
  fetch('/components/flowers.html')
    .then(res => res.text())
    .then(html => {
      document.querySelectorAll('.flowers').forEach(el => {
        el.innerHTML = html;
      });
    });
}

injectFlowersToAll();

loadComponent("navbar", "/components/navbar.html");
loadComponent("sidenav", "/components/sidenav.html");
loadComponent("footer", "/components/footer.html");