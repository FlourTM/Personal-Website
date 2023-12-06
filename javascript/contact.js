document.addEventListener('DOMContentLoaded', function () {
    // Function to handle mouse enter and leave events
    function handleHover(element, hoverSrc, originalSrc) {
        element.addEventListener('mouseenter', function () {
            this.querySelector('img').src = hoverSrc
            this.querySelector('img').classList.add('wiggleStatic')
        })

        element.addEventListener('mouseleave', function () {
            this.querySelector('img').src = originalSrc
            this.querySelector('img').classList.remove('wiggleStatic')
        })
    }

    // Selecting elements and calling the common function
    const github = document.getElementById('github')
    const linkedin = document.getElementById('linkedin')
    const etsy = document.getElementById('etsy')

    handleHover(github, './assets/socials/githubHover.svg', './assets/socials/github.svg')
    handleHover(linkedin, './assets/socials/linkedinHover.svg', './assets/socials/linkedin.svg')
    handleHover(etsy, './assets/socials/etsyHover.svg', './assets/socials/etsy.svg')

    const sendBtn = document.getElementById('my-form-button')

    sendBtn.onclick = function (event) {
        event.preventDefault()
        // Get values from inputs
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const message = document.getElementById('message').value

        // Validate inputs
        if (!validator.isLength(name, { min: 1, max: 255 })) {
            alert('Please enter a valid name.')
            return
        }

        if (!validator.isEmail(email)) {
            alert('Please enter a valid email address.')
            return
        }

        if (!validator.isLength(message, { min: 1, max: 1000 })) {
            alert('Please enter a message.')
            return
        }

        // Proceed with form submission
        const form = document.getElementById("form")
        const formData = new FormData(form)

        fetch("https://getform.io/f/407876bc-e104-4f30-b822-304da49a879f", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        })
            .then(response => {
                if (response.ok) {
                    // Successful submission
                    formMessage.textContent = 'Form submitted successfully!'
                    form.reset()
                } else {
                    // Error in submission
                    formMessage.textContent = 'Error submitting form. Please try again later.'
                }
            })
            .catch(error => {
                console.log(error)
                formMessage.textContent = 'Error submitting form. Please try again later.'
            })
    }
})

