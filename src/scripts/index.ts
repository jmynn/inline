import '../styles/index.css';
import { initializeTabList } from './tabs.ts';
import { initializeProductSlider } from './more-products.ts';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
document.addEventListener('DOMContentLoaded', () => {
	initializeTabList();
	initializeProductSlider();
	new Swiper('.more-products ', {
		direction: 'horizontal',
		enabled: true,
		width: 288,
		breakpoints: {
			1440: {
				enabled: false,
				slidesPerView: 4,
			}
		}
	});
});
