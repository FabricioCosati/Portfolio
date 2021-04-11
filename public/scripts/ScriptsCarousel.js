let counter = 0
let interval

if (counter == 0) {
	counter++
	interval = 1
}

function recursion() {

	setTimeout(() => {
		document.getElementById("radio" + counter).checked = true
		counter++
		if (counter > 4) {
			counter = 1
		}

		interval = 5000
		recursion()

	}, interval)

	const btns = document.querySelectorAll("[name='radio-btn']")
	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", () => {
			counter = i + 1
		})
	}
}

recursion()