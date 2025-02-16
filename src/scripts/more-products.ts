import { TypeProduct } from './types';
import wishIcon from '../assets/wish.svg';
import rateIcon from '../assets/stars.svg';
import picture_milk from '../assets/card-milk.webp'
import picture_bread from '../assets/card-bread.webp'
import picture_eggs from '../assets/card-eggs.webp'
import picture_butter from '../assets/card-butter.webp'

const PRODUCTS = [
	{
		id: 0,
		title: 'Молоко 3,2 %',
		provider: 'Вадима Рошки',
		cost: 95,
		weight: '0,93 л',
		picture: picture_milk,
	},
	{
		id: 1,
		title: 'Хлеб пшеничный',
		provider: 'Дарьи и Марии',
		cost: 95,
		weight: '930 г',
		picture: picture_bread,
	},
	{
		id: 2,
		title: 'Яйца куриные',
		provider: 'Евгения Рошаль',
		cost: 120,
		weight: '10 шт',
		picture: picture_eggs,
	},
	{
		id: 3,
		title: 'Масло сливочное 82 %',
		provider: 'Вадима Рошки',
		cost: 290,
		weight: '250 г',
		picture: picture_butter,
	},
] satisfies TypeProduct[];

export function initializeProductSlider(): void {
	const productSlider = document.getElementById('list-products')!;
	if (productSlider.children.length !== 0) {
		productSlider.replaceChildren();
	}
	PRODUCTS.forEach((product) => {
		const template = `<li class="list-products__item swiper-slide">
							<div class="list-products__product">
								<img
									src="${product.picture}"
									alt="product picture"
									class="list-products__picture" />
								<button
									class="list-products__wish"
									id="btn-wish-product">
									<img
										src="${wishIcon}"
										alt="wish icon" />
								</button>
							</div>
							<div class="list-products__info">
								<h3 class="list-products__title">${product.title}</h3>
								<h4 class="list-products__provider">от ${product.provider}</h4>
								<div class="list-products__price">
									<div class="list-products__cost">
										<span id="product-cost">${product.cost} </span> ₽
										<span class="list-products__cost_light">/ <span id="product-weight">${product.weight}</span></span>
									</div>
									<button
										class="list-products__cart cart-btn"
										id="btn-add-cart">
											<span>В корзину</span>
											<div class="cart-btn__group">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" data-item="icon-add">
													<path d="M6 1V6M6 11V6M6 6H11M6 6H1" stroke="#429F3A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" data-item="icon-cart-green">
													<g clip-path="url(#clip0_8_26187)">
														<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66699 13.9998C4.66699 13.2635 5.26395 12.6665 6.00033 12.6665C6.73671 12.6665 7.33366 13.2635 7.33366 13.9998C7.33366 14.7362 6.73671 15.3332 6.00033 15.3332C5.26395 15.3332 4.66699 14.7362 4.66699 13.9998Z" fill="#429F3A"/>
														<path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.9998C12 13.2635 12.597 12.6665 13.3333 12.6665C14.0697 12.6665 14.6667 13.2635 14.6667 13.9998C14.6667 14.7362 14.0697 15.3332 13.3333 15.3332C12.597 15.3332 12 14.7362 12 13.9998Z" fill="#429F3A"/>
														<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.666667C0 0.298477 0.298477 0 0.666667 0H3.33333C3.65108 0 3.92467 0.224257 3.98704 0.535829L4.54695 3.33333H15.3333C15.532 3.33333 15.7203 3.42195 15.847 3.57504C15.9736 3.72812 16.0254 3.92972 15.9882 4.12489L14.9206 9.72322C14.8291 10.1836 14.5787 10.5972 14.213 10.8915C13.8492 11.1844 13.3944 11.3406 12.9276 11.3333H6.4591C5.99225 11.3406 5.53747 11.1844 5.17365 10.8915C4.80817 10.5973 4.55776 10.1839 4.46622 9.72378C4.46618 9.72359 4.46626 9.72397 4.46622 9.72378L3.35253 4.15947C3.34801 4.14106 3.34425 4.12236 3.3413 4.10338L2.78688 1.33333H0.666667C0.298477 1.33333 0 1.03486 0 0.666667ZM4.81382 4.66667L5.77389 9.46346C5.80437 9.61692 5.88786 9.75478 6.00974 9.85289C6.13162 9.951 6.28413 10.0031 6.44056 10.0001L6.45333 10H12.9333L12.9461 10.0001C13.1025 10.0031 13.255 9.951 13.3769 9.85289C13.4982 9.75523 13.5815 9.6182 13.6123 9.4656L14.5275 4.66667H4.81382Z" fill="#429F3A"/>
													</g>
													<defs>
														<clipPath id="clip0_8_26187">
															<rect width="16" height="16" fill="white"/>
														</clipPath>
													</defs>
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-item="icon-cart-white">
													<g clip-path="url(#clip0_8_32220)">
														<path fill-rule="evenodd" clip-rule="evenodd" d="M7 21C7 19.8954 7.89543 19 9 19C10.1046 19 11 19.8954 11 21C11 22.1046 10.1046 23 9 23C7.89543 23 7 22.1046 7 21Z" fill="white"/>
														<path fill-rule="evenodd" clip-rule="evenodd" d="M18 21C18 19.8954 18.8954 19 20 19C21.1046 19 22 19.8954 22 21C22 22.1046 21.1046 23 20 23C18.8954 23 18 22.1046 18 21Z" fill="white"/>
														<path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H5C5.47663 0 5.88701 0.336385 5.98055 0.803743L6.82043 5H23C23.298 5 23.5805 5.13293 23.7705 5.36256C23.9605 5.59218 24.0381 5.89458 23.9823 6.18733L22.3809 14.5848C22.2437 15.2754 21.868 15.8958 21.3195 16.3373C20.7738 16.7766 20.0916 17.011 19.3914 17H9.68864C8.98837 17.011 8.3062 16.7766 7.76048 16.3373C7.21225 15.8959 6.83664 15.2759 6.69933 14.5857C6.69927 14.5854 6.69939 14.5859 6.69933 14.5857L5.02879 6.2392C5.02201 6.21159 5.01638 6.18353 5.01195 6.15508L4.18032 2H1C0.447715 2 0 1.55228 0 1ZM7.22073 7L8.66084 14.1952C8.70656 14.4254 8.83179 14.6322 9.01461 14.7793C9.19743 14.9265 9.42619 15.0047 9.66084 15.0002L9.68 15H19.4L19.4192 15.0002C19.6538 15.0047 19.8826 14.9265 20.0654 14.7793C20.2474 14.6328 20.3723 14.4273 20.4185 14.1984L21.7913 7H7.22073Z" fill="white"/>
													</g>
													<defs>
													<clipPath id="clip0_8_32220">
														<rect width="24" height="24" fill="white"/>
													</clipPath>
													</defs>
												</svg>
											</div>
									</button>
								</div>
								<img
									src="${rateIcon}"
									alt="product rate"
									class="list-products__rate" />
							</div>
						</li>`;
		productSlider.insertAdjacentHTML('beforeend', template);
	});
	return;
}
