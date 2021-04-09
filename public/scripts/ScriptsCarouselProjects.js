const carouselImages = document.querySelectorAll(".project-images")

carouselImages.forEach(carouselImage => {
    const images = carouselImage.querySelectorAll(".project-images img")
    const carouselButtons = carouselImage.parentNode.querySelectorAll(".project-button")
    const imagesCount = carouselImage.querySelectorAll(".project-images img").length

    let imageIndex = 1
    let translateX = 0

    images.item(imageIndex - 1).style.padding = "0"

    for (let button of carouselButtons) {
        button.addEventListener("click", (e) => {

            if (e.target.parentNode.id === "previous") {
                if (imageIndex !== 1) {
                    imageIndex--
                    translateX += carouselImage.clientWidth
                }
            }
            else {
                if (imageIndex !== imagesCount) {
                    imageIndex++
                    translateX -= carouselImage.clientWidth
                }
            }
            carouselImage.style.transform = `translateX(${translateX / 16}rem)`

            for (image of images) {
                image.style.padding = "3rem"
            }

            images.item(imageIndex - 1).style.padding = "0"
        })
    }
})
