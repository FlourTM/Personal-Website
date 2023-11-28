document.addEventListener('DOMContentLoaded', function () {
    const navbarContainer = document.querySelector('.navbar')
    const navbarUrl = './navbar.html'

    fetch(navbarUrl)
        .then(response => response.text())
        .then(html => {
            navbarContainer.innerHTML = html

            // Now that the content is loaded, get the menuButton
            const menuButton = document.getElementById('menuButton')
            const navbarMenu = document.getElementById('navbarMenu')
            let isOpen = false

            // Hover event
            menuButton.addEventListener('mouseenter', function () {
                this.querySelector('img').src = '../assets/menuhover.svg'
                this.querySelector('img').style.transform = isOpen ? 'rotate(90deg)' : 'rotate(90deg)'
            })

            menuButton.addEventListener('mouseleave', function () {
                this.querySelector('img').src = isOpen ? '../assets/menuopened.svg' : '../assets/menu.svg'
                this.querySelector('img').style.transform = isOpen ? 'rotate(0deg)' : 'rotate(0deg)'
            })

            // Click event
            menuButton.addEventListener('click', function () {
                const img = this.querySelector('img')
                isOpen = !isOpen
                img.src = isOpen ? '../assets/menuopened.svg' : '../assets/menu.svg'
                img.style.transform = isOpen ? 'rotate(1deg)' : 'rotate(0deg)'
                navbarMenu.classList.toggle('hidden', !isOpen)
            })
        })
})
