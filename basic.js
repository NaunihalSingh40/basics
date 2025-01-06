const ageSlider = document.getElementById('age');
const ageDisplay = document.getElementById('age-range');

ageSlider.addEventListener('input', function () {
    ageDisplay.textContent = ageSlider.value;
});

function redirect(){
    event.preventDefault();
    window.location.replace("dashboard.html");
}

document.getElementById("basic-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const definedKey = 108;

    const formData = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        phoneNumber: document.getElementById("number").value,
        key: document.getElementById("key").value,
        age: document.getElementById("age").value,
        gender: document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : null,
        stakeholderType: document.getElementById("stakeholder-type").value,
        skills: document.getElementById("skills").value,
        termsAccepted: document.getElementById("terms").checked,
        Message: document.getElementById("message"),
    };

    if(formData.key == definedKey){
        formData.Message.textContent= "Key verified"
        formData.Message.style.color= "green"
    }

    else{
        formData.Message.textContent= "Invalid Key"
        formData.Message.style.color= "red"
        alert("Failed to submit the form!");
        return;
    }
    console.log(formData);
    redirect();

    // Save each field as a separate cookie
    document.cookie = `email=${encodeURIComponent(formData.email)}; path=/; max-age=3600`;
    document.cookie = `password=${encodeURIComponent(formData.password)}; path=/; max-age=3600`;
    document.cookie = `phonenumber=${encodeURIComponent(formData.phoneNumber)}; path=/; max-age=3600`;
    document.cookie = `key=${encodeURIComponent(formData.key)}; path=/; max-age=3600`;
    document.cookie = `age=${encodeURIComponent(formData.age)}; path=/; max-age=3600`;
    document.cookie = `gender=${encodeURIComponent(formData.gender)}; path=/; max-age=3600`;
    document.cookie = `stakeholderType=${encodeURIComponent(formData.stakeholderType)}; path=/; max-age=3600`;
    document.cookie = `skills=${encodeURIComponent(formData.skills)}; path=/; max-age=3600`;
    document.cookie = `terms=${encodeURIComponent(formData.termsAccepted)}; path=/; max-age=3600`;

    alert("Credentials saved over cookies!");
});


