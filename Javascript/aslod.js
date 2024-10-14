function alihkan(idElement) {
	let elem = document.getElementById(idElement)
	
	elem.addEventListener("click", function() {
		window.location.href = "gensin.html" + "#" + "section-" + idElement
	})	
}

	
