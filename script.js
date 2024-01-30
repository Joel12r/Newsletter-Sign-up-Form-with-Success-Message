function handleSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const errorMessage = document.getElementById('error-message');
    const invalidEmailMessage = document.getElementById('invalid-email-message');
    const emailInput = document.getElementById('email');
    const list = document.querySelector('ul');
    const heading = document.getElementById('heading');
    const buttonText = document.getElementById('buttonText');
    const emailLable = document.getElementById('emailLable');
    const paragraph = document.getElementById('paragraph');
    const image  = document.getElementById('secondColumn')
    const card = document.getElementById('card');
    const firstColumn = document.getElementById('firstColumn');
    const svgIcon = document.getElementById('svgIcon')
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        errorMessage.textContent = "Please enter an email";
        invalidEmailMessage.textContent = ""; // Clear invalid email message
        emailInput.classList.add('error');
    } else if (!emailRegex.test(email)) {
        errorMessage.textContent = ""; // Clear empty email message
        invalidEmailMessage.textContent = "Valid email required";
        emailInput.classList.add('error');
    } else {
        errorMessage.textContent = "";
        invalidEmailMessage.textContent = ""; // Clear invalid email message
        emailInput.classList.remove('error');
        list.style.display = 'none';
        emailInput.style.display='none' // Hide the list
        emailLable.style.display='none'
        buttonText.textContent = "Dismiss Message";
        heading.textContent ="Thanks for subscribing!"
        heading.style.padding='0 0 0 1px'
        image.style.display = 'none'
        card.classList.add('success-card')
        heading.classList.add('success-heading')
        firstColumn.classList.add('success-width')
        paragraph.classList.add('success-paragraph')
        buttonText.classList.add('success-button')
        buttonText.style.margin=" 0 0 2rem 2rem"
        svgIcon.style.display='block'
        paragraph.innerHTML = `A confirmation email has been sent to <strong>${email}</strong> Please open it and click the button inside to confirm your subscription`;
        console.log("Successfully subscribed");
    }
}
