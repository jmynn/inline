import { TypeTab } from './types';
import picture_man from '../assets/man.webp';

const TABS_INFO: TypeTab[] = [
	{
		id: 'description',
		label: 'описание',
	},
	{
		id: 'reviews',
		label: 'отзывы',
	},
	{
		id: 'source',
		label: 'откуда?',
	},
];
const TEMPLATES_TAB_BODY: Record<TypeTab['id'], string> = {
	description: `
    <div class="tabs__tomato-text tomato-text">
		<p><span><span class="tomato-text_bold">Томаты на ветке красные</span> (помидоры) - более плотные, яркие и ароматные по сравнению с обычными. </span><span>Они славятся низкой калорийностью и высоким содержанием витаминов, клетчатки, пектина и минеральных веществ. В них содержатся также каротиноиды, кислоты и мощный антиоксидант ликопин.</span></p>
		<p class="tomato-text_large">Помидор - незаменимый продукт в мировой кулинарии. Он - основа многочисленных соусов, маринадов, кетчупа, испанского холодного супа Гаспачо или итальянской закуски Капрезе. <span>С ним делают салаты, его тушат, солят и консервируют. Помидоры на веточке особенно красиво смотрятся в запеченном виде.</span></p>
	</div>
	<div class="tabs__info">
		<div class="table-info tabs__table-info">
			<div class="table-info__title">характеристики</div>
			<ul class="table-info__list">
				<li class="table-info__item">
					<div class="table-info__label">Страна</div>
					<div class="table-info__data">Россия</div>
				</li>
				<li class="table-info__item">
					<div class="table-info__label">Поставщик</div>
					<div class="table-info__data">Наталья и Юрий Лейшан</div>
				</li>
				<li class="table-info__item">
					<div class="table-info__label">Тип упаковки</div>
					<div class="table-info__data">Крафтовый пакет</div>
				</li>
				<li class="table-info__item">
					<div class="table-info__label">Сертификаты качества</div>
					<div class="table-info__data">В наличии</div>
				</li>
			</ul>
		</div>
		<div class="table-info tabs__table-info">
			<div class="table-info__title">Пищевая ценность <span>на 100г</span></div>
			<ul class="table-info__list">
				<li class="table-info__item">
					<div class="table-info__label">Энергетическая ценность</div>
					<div class="table-info__data">18 кКал</div>
				</li>
				<li class="table-info__item">
					<div class="table-info__label">Белки</div>
					<div class="table-info__data">0.9 г</div>
				</li>
				<li class="table-info__item">
					<div class="table-info__label">Жиры</div>
					<div class="table-info__data">0.2 г</div>
				</li>
				<li class="table-info__item">
					<div class="table-info__label">Углеводы</div>
					<div class="table-info__data">3.9 г</div>
				</li>
			</ul>
		</div>
		<div class="table-info tabs__table-info">
			<div class="table-info__title">условия хранения</div>
			<ul class="table-info__list">
				<li class="table-info__item">
					<div class="table-info__label">Срок хранения</div>
					<div class="table-info__data">7 дней</div>
				</li>
				<li class="table-info__item">
					<div class="table-info__label">Температура хранения</div>
					<div class="table-info__data">от 3 ° до 7 °</div>
				</li>
			</ul>
		</div>
	</div>
    `,
	reviews: `
        <div class="tabs__review">
			<p>Помогите нам стать ещё лучше. Оставляя отзывы, вы таким образом \nуказываете нам на зоны роста. Мы правда, читаем все отзывы.</p>
		</div>
		<button class="tabs__btn-review btn-review" id="review-btn">Оставитить отзыв</button>
    `,
	source: `
        <div class="tabs__wrapper">
        	<div class="tabs__tomato-text tomato-text">
				<p><span><span class="tomato-text_bold">Томаты на ветке красные</span> (помидоры) - более плотные, яркие и ароматные по сравнению с обычными. </span><span>Они славятся низкой калорийностью и высоким содержанием витаминов, клетчатки, пектина и минеральных веществ. В них содержатся также каротиноиды, кислоты и мощный антиоксидант ликопин.</span></p>
				<p class="tomato-text_large">Помидор - незаменимый продукт в мировой кулинарии. Он - основа многочисленных соусов, маринадов, кетчупа, испанского холодного супа Гаспачо или итальянской закуски Капрезе. <span>С ним делают салаты, его тушат, солят и консервируют. Помидоры на веточке особенно красиво смотрятся в запеченном виде.</span></p>
			</div>
			<div class="tabs__group">
				<div class="tabs__provider provider">
				    <div class="provider__name">Наталья и Юрий Лейшан</div>
					<img src="${picture_man}" alt="man pic" class="provider__picture">
				</div>
				<div class="tabs__actions">
					<button class="tabs__action" id="tab-action-1">Сертификаты</button>
					<button class="tabs__action" id="tab-action-2">О поставщике</button>
				</div>
			</div>
        </div>
    `,
};

let activeTab = TABS_INFO[0].id;

function setActiveTab(tabId: TypeTab['id']): void {
	activeTab = tabId;
	addClassActiveTab();
	setCurrentBodyTab();
	return;
}
function setCurrentBodyTab(): void {
	const tabBody = document.getElementById('tabs-body')!;
	if (tabBody.children.length !== 0) tabBody.replaceChildren();
	tabBody.insertAdjacentHTML('afterbegin', TEMPLATES_TAB_BODY[activeTab]);
	return;
}
function addClassActiveTab(): void {
	const tabList = document.getElementById('tabs-list')!;
	for (let child of tabList.children) {
		if(child.classList.contains('_active') && child.getAttribute('data-id') !== activeTab) {
			child.classList.remove('_active');
		}
	}
	document.querySelector(`[data-id="${activeTab}`)?.classList.add('_active')
	return;
}

export function initializeTabList() {
	const tabList = document.getElementById('tabs-list')!;
	TABS_INFO.forEach((tab) => {
		const tabItem = document.createElement('li');
		tabItem.classList.add('tabs__item');
		tabItem.textContent = tab.label;
		tabItem.dataset.id = tab.id;
		tabItem.addEventListener('click', () => setActiveTab(tab.id));
		tabList.appendChild(tabItem);
	});
	addClassActiveTab();
	setCurrentBodyTab();
	return;
}
