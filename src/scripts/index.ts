import '../styles/index.css';
import { initializeTabList } from './tabs.ts';
import { initializeProductSlider } from './more-products.ts';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
document.addEventListener('DOMContentLoaded', () => {
	initializeTabList();
	initializeProductSlider();
	const swiper = new Swiper('.more-products ', {
		direction: 'horizontal',
		enabled: false,
	});
});
