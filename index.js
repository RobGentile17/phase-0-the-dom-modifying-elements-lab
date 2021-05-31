const oldHeader = "h1"

document.querySelector("#main").remove()

const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "Rob is the champion!"
newHeader.className = "victory"