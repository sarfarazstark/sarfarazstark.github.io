import './style.css';
// import particlesJS from 'particles.js';
particlesJS.load('particles-js', 'assets/particles.json');

document.querySelector('.projects').addEventListener('click', function (e) {
	const btn = e.target.closest('#view');
	if (!btn) return;
	btn.querySelector('i').classList.toggle('rotate-180');
	const paragraph = btn.parentElement.parentElement.querySelector('p');
	paragraph.classList.toggle('hidden');
});
