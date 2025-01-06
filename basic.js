const ageSlider = document.getElementById('age');
const ageDisplay = document.getElementById('age-range');

ageSlider.addEventListener('input', function () {
    ageDisplay.textContent = ageSlider.value;
});

document.getElementById("basic-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const formData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        phoneNumber: document.getElementById("number").value,
        key: document.getElementById("key").value,
        age: document.getElementById("age").value,
        gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : null,
        stakeholderType: document.getElementById("stakeholder-type").value,
        skills: document.getElementById("skills").value,
        termsAccepted: document.getElementById("terms").checked
    };

    console.log(formData);
});

