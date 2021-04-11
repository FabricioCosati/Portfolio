const Modal = {
    body: document.querySelector(".body"),
    modalOverlay: document.querySelector(".modal-overlay"),
    modal: document.querySelector(".modal"),
    projects_wrapper: document.querySelectorAll(".project-wrapper"),
    projects: document.querySelectorAll(".project"),
    project: "",
    projectsArray: [],

    init(func, e) {

        Modal[func]()

        Modal.project = e.target.parentNode

        if(func == "openModal"){
            Modal.momentProject(e)
        }
    },

    openModal() {
        Modal.modalOverlay.style.opacity = 1
        Modal.modalOverlay.style.top = 0
        Modal.modalOverlay.style.bottom = 0
        Modal.modalOverlay.style.visibility = "visible"
        Modal.body.style.overflow = "hidden"
    },

    closeModal() {
        Modal.modalOverlay.style.opacity = 0
        Modal.modalOverlay.style.top = "-100%"
        Modal.modalOverlay.style.bottom = "initial"
        Modal.modalOverlay.style.visibility = "hidden"
        Modal.body.style.overflow = "auto"

        const modal = document.querySelector(".modal-overlay .modal")

        Modal.projectsArray.forEach(project => {
            modal.appendChild(project)
        })

    },

    momentProject(e) {

        for (let i = 0; i < Modal.projects_wrapper.length; i++) {
            Modal.projects[i].style.display = "none"
            if (Modal.projects_wrapper[i] == e.target.parentNode) {
                Modal.projects[i].style.display = "initial"
            }
        }

        Modal.projects.forEach(project => {

            if(project.style.display != "initial"){
                Modal.projectsArray.push(project)
                project.remove()
            }
            console.log(project)
        })         
        
    }
}
