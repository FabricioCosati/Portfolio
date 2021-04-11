const Scroll = {

    scrollTop() {
        document.getElementById("info").scrollIntoView({ block: 'center', behavior: 'smooth' })
    },

    scrollAbout() {
        document.getElementById("info1").scrollIntoView({ block: 'center', behavior: 'smooth' })
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
        document.querySelector("#info3 .project-wrapper").scrollIntoView({ block: 'center', behavior: 'smooth' })
    }
}

window.onload = backTopOnRefresh()

function backTopOnRefresh() {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
}

window.onscroll = function () { myFunction() };

const header = document.getElementById("header");
const sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > 40) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}