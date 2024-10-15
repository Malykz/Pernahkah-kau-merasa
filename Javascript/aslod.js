function alihkan(idElement) {
	let elem = document.getElementById(idElement)
	
	elem.addEventListener("click", function() {
		window.location.href = "index.html" + "#" + "section-" + idElement
	})	
}

	
