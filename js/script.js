function toggleMenu() {
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}
