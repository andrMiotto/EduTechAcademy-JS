const cepInput = document.querySelector(".cep-input");
const ruaInput = document.querySelector(".rua-input");
const bairroInput = document.querySelector(".bairro-input");
const cidadeInput = document.querySelector(".cidade-input");
const estadoInput = document.querySelector(".estado-input");

const themeElement = document.querySelector(".change-theme");
const headerElement = document.querySelector(".header");
const navElements = document.querySelector(".navigation-buttons ul");

const mainElement = document.querySelector(".main")
const heroElement = document.querySelector(".hero")

const coursesElement = document.querySelector(".courses");
const cardCourseElement = document.querySelectorAll(".card-course")

const enrollmentElement = document.querySelector(".enrollment")
const enrollmentTitleElement = document.querySelector(".enrollment-title")
const enrollmentSubTitleElement = document.querySelector(".enrollment-subtitle")


themeElement.addEventListener("click", () => {

    if (headerElement.classList.contains("bg-[#0b1220]")) {

        // HEADER
        headerElement.classList.remove("bg-[#0b1220]");
        headerElement.classList.add("bg-slate-50", "text-black");

        navElements.classList.remove("text-[#F9F9F9]");
        navElements.classList.add("text-black");
    } else {
        // HEADER
        headerElement.classList.remove("bg-slate-50");
        headerElement.classList.add("bg-[#0b1220]", "text-[#F9F9F9]");

        navElements.classList.remove("text-black");
        navElements.classList.add("text-[#F9F9F9]");
    }

    if (mainElement.classList.contains("bg-[#0b1220]")) {

        // MAIN
        mainElement.classList.remove("bg-[#0b1220]");
        mainElement.classList.add("bg-slate-50");
    } else {


        // MAIN
        mainElement.classList.remove("bg-slate-50");
        mainElement.classList.add("bg-[#0b1220]");
    }

    if (heroElement.classList.contains("bg-[#0b1220]")) {

        //HERO
        heroElement.classList.remove("bg-[#0b1220]", "text-slate-50")
        heroElement.classList.add("bg-slate-50", "text-black");

    } else {//HERO
        heroElement.classList.remove("bg-slate-50", "text-black")
        heroElement.classList.add("bg-[#0b1220]", "text-slate-50");
    }

    if (coursesElement.classList.contains("bg-[#0b1220]")) {

        //COURSES
        coursesElement.classList.remove("bg-[#0b1220]", "text-slate-50");
        coursesElement.classList.add("bg-slate-50", "text-black");

        cardCourseElement.classList.remove("bg-[#0b1220]", "text-slate-50");
        cardCourseElement.classList.add("bg-slate-50", "text-black");
    } else {
        //COURSES
        coursesElement.classList.remove("bg-slate-50", "text-black")
        coursesElement.classList.add("bg-[#0b1220]", "text-slate-50");

        cardCourseElement.classList.remove("bg-slate-50", "text-black")
        cardCourseElement.classList.add("bg-[#0b1220]", "text-slate-50");
    }


    if (enrollmentElement.classList.contains("bg-[#0b1220]")) {

        //ENROLLMENT
        enrollmentElement.classList.remove("bg-[#0b1220]");
        enrollmentElement.classList.add("bg-slate-50");

        enrollmentTitleElement.classList.remove("text-slate-50");
        enrollmentTitleElement.classList.add("text-black");

    } else {

        //ELROLLMENT
        enrollmentElement.classList.remove("bg-slate-50", "text-black")
        enrollmentElement.classList.add("bg-[#0b1220]", "text-slate-50");


        enrollmentTitleElement.classList.remove("text-black");
        enrollmentTitleElement.classList.add("text-slate-50");
    }


});


cepInput.addEventListener("blur", () => {
    const cep = cepInput.value.replace(/\D/g, "");





    if (cep.length === 8) {
        fetch(`https://opencep.com/v1/${cep}`)
            .then(res => res.json())
            .then(data => {
                ruaInput.value = data.logradouro;
                bairroInput.value = data.bairro;
                cidadeInput.value = data.localidade;
                estadoInput.value = data.uf;
            })
            .catch(err => console.error("CEP não encontrado ou erro na API"));
    }
});
