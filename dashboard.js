
// Function to get a cookie by name
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';'); // Split the cookies into an array
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length); // Remove leading spaces
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length); // Return cookie value
    }
    return null; // If cookie not found
}

const email = getCookie('email');
const password = getCookie('password');
const phoneNumber = getCookie('phonenumber');
const key = getCookie('key');
const age = getCookie('age');
const gender = getCookie('gender');
const stakeholderType = getCookie('stakeholderType');
const skills = getCookie('skills');
const termsAccepted = getCookie('terms');


const Email = document.getElementById("email");
const Mail = document.getElementById("display-email");
const Phone = document.getElementById("number");
const Nmber = document.getElementById("display-number");
const Skills = document.getElementById("skills");
const Skill = document.getElementById("display-skills")
const Stakeholder = document.getElementById("stakeholder");
const StakeholderType = document.getElementById("display-stakeholder");
const Gender = document.getElementById("gender");
const Age = document.getElementById("age");

Email.textContent = email;
Mail.textContent = email;
Phone.textContent = phoneNumber;
Nmber.textContent = phoneNumber;
Skills.textContent = skills;
Stakeholder.textContent = stakeholderType;
StakeholderType.textContent = stakeholderType;
Gender.textContent = gender;
Age.textContent = age;
Skill.textContent = skills;

console.log(email,password,phoneNumber,key,age,gender,stakeholderType,skills,termsAccepted);