document.querySelector(".input-nav_optimizeButton__3JiPS")?.click();
setTimeout(() => {
	document.querySelectorAll(".cm-line")?.forEach(linea => {
		linea.innerHTML = linea.innerHTML.replace(/#f+([;"])/g, "#d3c6aa$1")
			.replace(/#3+([;"])/g, "#272e33$1")
			.replace(/#1976d2([;"])/g, "#7fbbb3$1")
			.replace(/#4caf50([;"])/g, "#a7c080$1")
			.replace(/#ffc107([;"])/g, "#dbbc7f$1")
			.replace(/#ff3d00([;"])/g, "#e67e80$1")
			.replace(/#ed1515([;"])/g, "#e67e80$1");
	});
	setTimeout(() => {
		document.querySelector(".input-nav_prettifyButton__r8jI2")?.click();
	}, 750);
}, 750);
