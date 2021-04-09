const Scroll = {

    scrollProfile() {
        document.getElementById("info3").scrollIntoView({ block: 'center', behavior: 'smooth' })
    },

    scrollFooter() {
        window.scroll({
            top: document.body.scrollHeight,
            behavior: "smooth"
        })
    },

    scrollCurriculum() {
        document.getElementById("info2").scrollIntoView({ block: 'center', behavior: 'smooth' })
    },

    scrollProjects() {
        document.getElementById("info3").scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
}

window.onscroll = function () { myFunction() };

const header = document.getElementById("header");
const sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}