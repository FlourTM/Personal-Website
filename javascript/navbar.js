document.addEventListener('DOMContentLoaded', function () {
    const navbarContainer = document.querySelector('.navbar')
    const navbarUrl = './navbar.html'

    fetch(navbarUrl)
        .then(response => response.text())
        .then(html => {
            navbarContainer.innerHTML = html

            // Logo Handling
            const myLogo = document.getElementById('myLogo')

            myLogo.addEventListener('mouseenter', function () {
                myLogo.src = '/assets/logos/logoHover.svg'
            })

            myLogo.addEventListener('mouseleave', function () {
                myLogo.src = '/assets/logos/floursvg.svg'
            })

            // Menu Button Handling
            const menuButton = document.getElementById('menuButton')
            const navbarMenu = document.getElementById('navbarMenu')
            let isOpen = false

            // Hover event
            menuButton.addEventListener('mouseenter', function () {
                this.querySelector('img').src = '/assets/menu/menuhover.svg'
                this.querySelector('img').style.transform = isOpen ? 'rotate(90deg)' : 'rotate(90deg)'
            })

            menuButton.addEventListener('mouseleave', function () {
                this.querySelector('img').src = isOpen ? '/assets/menu/menuopened.svg' : '/assets/menu/menu.svg'
                this.querySelector('img').style.transform = isOpen ? 'rotate(0deg)' : 'rotate(0deg)'
            })

            // Click event
            menuButton.addEventListener('click', function () {
                const img = this.querySelector('img')
                isOpen = !isOpen
                img.src = isOpen ? '/assets/menu/menuopened.svg' : '/assets/menu/menu.svg'
                img.style.transform = isOpen ? 'rotate(1deg)' : 'rotate(0deg)'
                navbarMenu.classList.toggle('hidden', !isOpen)
                document.body.classList.toggle('overflow-hidden', isOpen)
            })
        })
})
