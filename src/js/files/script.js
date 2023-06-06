// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";

// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import mixitup from 'mixitup';

window.onload = () => {
	document.addEventListener('click', (e) => {
		const targetElement = e.target;

		if (targetElement.closest('.icon-menu')) {
			if (document.querySelector('.menu__body')) {
				document.querySelector('.menu__body').classList.toggle('_active');
			}
		}
	});

	var mixer = mixitup(".content-articles__articles", {
		load: {
			filter: ".category-writing",
		},
	});
}