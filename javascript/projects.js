const projectImages = {
    1: [
        './assets/projectImages/knowledgeGraph/image1.png',
        './assets/projectImages/knowledgeGraph/image2.png',
        './assets/projectImages/knowledgeGraph/image3.png',
        './assets/projectImages/knowledgeGraph/image4.png',
        './assets/projectImages/knowledgeGraph/image5.png',
        './assets/projectImages/knowledgeGraph/image6.png',
        './assets/projectImages/knowledgeGraph/image7.png',
    ],
    2: [
        './assets/projectImages/ecommerce/image1.png',
        './assets/projectImages/ecommerce/image2.png',
        './assets/projectImages/ecommerce/image3.png',
        './assets/projectImages/ecommerce/image4.png',
        './assets/projectImages/ecommerce/image5.png',
        './assets/projectImages/ecommerce/image6.png',
        './assets/projectImages/ecommerce/image7.png',
        './assets/projectImages/ecommerce/image8.png',
        './assets/projectImages/ecommerce/image9.png',
        './assets/projectImages/ecommerce/image10.png',
        './assets/projectImages/ecommerce/image11.png',
        './assets/projectImages/ecommerce/image12.png',
    ],
    3: [
        './assets/projectImages/recipeSaver/image1.png',
        './assets/projectImages/recipeSaver/image2.png',
        './assets/projectImages/recipeSaver/image3.png',
        './assets/projectImages/recipeSaver/image4.png',
    ],
}

let currentImage = 0

function toggleSlideshow(projectNumber) {
    const modal = document.getElementById(`slideshowModal${projectNumber}`)
    modal.classList.toggle('hidden')
    currentImage = 0
    updateSlideshowImages(projectNumber)
}

function closeSlideshow() {
    const modals = document.querySelectorAll('.overlay')
    modals.forEach(function (modal) {
        modal.classList.add('hidden')
    })
}

function navigateSlideshow(direction) {
    const activeModal = document.querySelector('.overlay:not(.hidden)')
    const projectNumber = activeModal.id.replace('slideshowModal', '')

    currentImage += direction

    // Ensure the index stays within bounds
    if (currentImage < 0) {
        currentImage = projectImages[projectNumber].length - 1
    } else if (currentImage >= projectImages[projectNumber].length) {
        currentImage = 0
    }

    updateSlideshowImages(projectNumber)
}

function updateSlideshowImages(projectNumber) {
    const slideshowImages = document.querySelector(`#slideshowModal${projectNumber} .slideshow-images`)
    const newImage = document.createElement('img')
    newImage.src = projectImages[projectNumber][currentImage]
    newImage.classList.add('fade-in')
    
    // Remove existing images before appending the new one
    while (slideshowImages.firstChild) {
        slideshowImages.removeChild(slideshowImages.firstChild)
    }
    
    // Append the new image
    slideshowImages.appendChild(newImage)

    // Add a counter element to display the current image number
    const counterElement = document.querySelector(`#slideshowModal${projectNumber} .image-counter`)
    counterElement.textContent = `${currentImage + 1} / ${projectImages[projectNumber].length}`
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.slideshowBtns')
    buttons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            toggleSlideshow(index + 1)
        })
    })

    const closeButtons = document.querySelectorAll('.close')
    closeButtons.forEach(function (closeButton) {
        closeButton.addEventListener('click', function () {
            closeSlideshow()
        })
    })

    const arrowButtons = document.querySelectorAll('.arrow')
    arrowButtons.forEach(function (arrowButton, index) {
        arrowButton.addEventListener('click', function () {
            navigateSlideshow(parseInt(arrowButton.dataset.direction, 10))
        })
    })
})