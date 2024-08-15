const shapes = document.querySelectorAll('.shape');

shapes.forEach((shape) => {
	const size = Math.random() * 50 + 20;
	shape.style.width = `${size}px`;
	shape.style.height = `${size}px`;
	shape.style.top = `${Math.random() * 100}vh`;
	shape.style.left = `${Math.random() * 100}vw`;

	setInterval(() => {
		const x = Math.random() * 100;
		const y = Math.random() * 100;
		shape.style.transform = `translate(${x}vw, ${y}vh)`;
	}, 5000);
});
