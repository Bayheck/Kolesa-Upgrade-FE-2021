const clothes = [
    {
        id:       0,
        title:    'Классная футболка',
        price:    333,
        isNew:    false,
        img:      './src/assets/tshirt.jpg',
        details:  'Брендированная футболка от Qazaq Republic. Материал хлопок...',
        material: 'true',
    },
    {
        id:       1,
        title:    'Классное худи',
        price:    666,
        isNew:    true,
        img:      './src/assets/hood.jpg',
        details:  'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
        material: true,
    },
    {
        id:       2,
        title:    'Классная красная футболка',
        price:    206,
        isNew:    true,
        img:      './src/assets/redshirt.png',
        details:  'Удобная красная футболка для дома',
        material: true,
    },
    {
        id:       3,
        title:    'Классная футболка',
        price:    218,
        isNew:    false,
        img:      './src/assets/tshirt.jpg',
        details:  'Брендированная футболка от Qazaq Republic. Материал хлопок...',
        material: true,
    },
    {
        id:       4,
        title:    'Классная футболка',
        price:    3433,
        isNew:    false,
        img:      './src/assets/tshirt.jpg',
        details:  'Брендированная футболка от Qazaq Republic. Материал хлопок...',
        material: true,
    },
    {
        id:       5,
        title:    'Классная футболка',
        price:    6636,
        isNew:    false,
        img:      './src/assets/tshirt.jpg',
        details:  'Брендированная футболка от Qazaq Republic. Материал хлопок...',
        material: true,
    },
    {
        id:       6,
        title:    'Классная футболка',
        price:    2026,
        isNew:    false,
        img:      './src/assets/tshirt.jpg',
        details:  'Брендированная футболка от Qazaq Republic. Материал хлопок...',
        material: true,
    },
    {
        id:       7,
        title:    'Классная футболка',
        price:    2181,
        isNew:    false,
        img:      './src/assets/tshirt.jpg',
        details:  'Брендированная футболка от Qazaq Republic. Материал хлопок...',
        material: true,
    },
];

const accessories = [
    {
        id:       8,
        title:    'Классная кружка',
        price:    2000,
        isNew:    true,
        img:      './src/assets/bottle.jpg',
        details:  'Бутылка для воды струбочкой',
        material: false,
    },
    {
        id:       9,
        title:    'Классная игрушка',
        price:    5000,
        isNew:    true,
        img:      './src/assets/horsetoy.png',
        details:  'Игрушка для детей',
        material: false,
    },
    {
        id:       10,
        title:    'Классная кружка',
        price:    2500,
        isNew:    false,
        img:      './src/assets/bottle.jpg',
        details:  'Бутылка для воды струбочкой',
        material: false,
    },
    {
        id:       11,
        title:    'Классная кружка',
        price:    2200,
        isNew:    false,
        img:      './src/assets/bottle.jpg',
        details:  'Бутылка для воды струбочкой',
        material: false,
    },
    {
        id:       12,
        title:    'Классная кружка',
        price:    1900,
        isNew:    false,
        img:      './src/assets/bottle.jpg',
        details:  'Бутылка для воды струбочкой',
        material: false,
    },
    {
        id:       13,
        title:    'Классная кружка',
        price:    3000,
        isNew:    false,
        img:      './src/assets/bottle.jpg',
        details:  'Бутылка для воды струбочкой',
        material: false,
    },
    {
        id:       14,
        title:    'Классная кружка',
        price:    4500,
        isNew:    false,
        img:      './src/assets/bottle.jpg',
        details:  'Бутылка для воды струбочкой',
        material: false,
    },
    {
        id:       15,
        title:    'Классная кружка',
        price:    999,
        isNew:    false,
        img:      './src/assets/bottle.jpg',
        details:  'Бутылка для воды струбочкой',
        material: false,
    },
];

const onOverlay = () => {
    document.getElementById('overlay').style.display = 'block';
};

const offOverlay = () => {
    document.getElementById('overlay').style.display = 'none';
};

const makeProductCard = (title, image, price, isNew, id) => ` <div class="card" data-index = "${id}">
    <div class="image">
        <img src="${image}" alt="Футболка" width ="330px" height="330px">
        ${isNew ? '<span class="badge">NEW</span>' : ''}

    </div>

    <div class="description">
        <div class="price">
            ${price} баллов
        </div>
        <h3 class="title">
            ${title}
        </h3>
        <div class="sizes">
            Размеры S/M/L
        </div>
        <div class="butcontain">
            <button
            class="button"
            type="button"
            >
            Заказать
        </button>
        </div>
    </div>
</div>`;

const makeModalWindow = ({
    title, img, price, details, material,
}) => `
<div class="modal">
<button type="button" class="exit_icon">
</button>

<div class="show">
    <img src="${img}" alt="черное худи колеса" class="image" width="330" height="330">
    <div class="photos">
        <button type="button" class="galleryButtons">
            <img src="/src/assets/Woman.jpg" alt="девушка в белом худи" width="50px" height="50px">
        </button>
        <button type="button" class="galleryButtons">
            <img class="active-preview" src="/src/assets/miniHood.jpg" alt="черное худи колеса" width="50px"
                height="50px">
        </button>
        <button type="button" class="galleryButtons">
            <img src="/src/assets/Man.jpg" alt="парень в черном худи" width="50px" height="50px">
        </button>
    </div>
</div>
<div class="content">
    <h4>
        ${title}
    </h4>
    <div class="money">
        <div class="purchase">
            <div class="cost">
                ${price} баллов
            </div>
            <button class="button_js" type="button">
                Заказать
            </button>
        </div>

        <div class="balance">
            <div class="leftBalance">
                <div class="balance-text">Твой баланс:</div>
                <div class="numb">
                    3 945 баллов
                </div>
            </div>
            <div class="shop_icon">
            </div>
        </div>
    </div>
    <div class="buy">
        <div class="color">
            <span class="colorSize">Цвета:</span>
            <div class="radiocolor">
                <label class="colorLabel checked">
                    <span class="colorInputWrapper">
                        <input class="radio" type="radio" id="color-1" name="color" value="blue" checked />
                        <span class="sizeLabelBox blue"></span>
                    </span>
                    <span class="sizeLabelSpan">Синий</span>
                </label>

                <label class="colorLabel">
                    <span class="colorInputWrapper">
                        <input class="radio" type="radio" id="color-2" name="color" value="beige" />
                        <span class="sizeLabelBox  beige"></span>
                    </span>
                    <span class="sizeLabelSpan">Бежевый</span>
                </label>

                <label class="colorLabel">
                    <span class="colorInputWrapper">
                        <input class="radio" type="radio" id="color-3" name="color" value="grey" />
                        <span class="sizeLabelBox  grey"></span>
                    </span>
                    <span class="sizeLabelSpan">Серый</span>
                </label>
            </div>
        </div>

        <div class="size">
            <span class="colorSize">Размер:</span>
            <div class="sizeWrapper">
                <label class="sizeLabel  checked">
                    <span class="sizeInputWrapper">
                        <input class="radio" label="S" type="radio" id="s-size" name="size" value="S" checked />

                    </span>
                    <span class="sizeLabelSpan">S</span>
                </label>

                <label class="sizeLabel">
                    <span class="sizeInputWrapper">
                        <input class="radio" label="M" type="radio" id="m-size" name="size" value="M" />

                    </span>
                    <span class="sizeLabelSpan">M</span>
                </label>

                <label class="sizeLabel">
                    <span class="sizeInputWrapper">
                        <input class="radio" label="L" type="radio" id="l-size" name="size" value="L" />

                    </span>
                    <span class="sizeLabelSpan">L</span>
                </label>
            </div>
        </div>
        <div class="details">
            <div>
                Детали:
                <div class="words">
                    ${details}
                </div>
            </div>
            <div class="material">
                ${!material ? '' : `Как выбрать размер:<div class="howChooseText">
                Написать дяде Рику для уточнения.</div>`}
            </div>
        </div>
    </div>
</div>
</div>
`;

const sortByNew = (a, b) => {
    if (a.isNew && b.isNew) {
        return 0;
    }

    if (b.isNew) {
        return 1;
    }

    return -1;
};

const merged = accessories.concat(clothes);

const closeModal = (e) => {
    if (e.target.closest('.exit_icon')) {
        offOverlay();
        e.target.closest('.exit_icon').parentNode.parentNode.remove();
    }
};

const openModal = (event) => {
    onOverlay();
    const { index } = event.target.closest('.card').dataset;

    const modal = makeModalWindow(merged.find(x => `${x.id}` === index));
    const div = document.createElement('div');

    div.innerHTML = modal;
    div.addEventListener('click', (e) => {
        closeModal(e);
        div.removeEventListener('click', closeModal);
    });
    document.querySelector('body').append(div);
};

const addCardClickEventListener = () => {
    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', openModal);
    });
};

// initial render of all products category
merged.sort(sortByNew);
merged.forEach((card) => {
    const {
        title, price, isNew, img, id,
    } = card;
    const cardHtml = makeProductCard(title, img, price, isNew, id);

    document.querySelector('.js_gallery').innerHTML += cardHtml;
});

addCardClickEventListener();

const cardsDisplay = (event) => {
    const categoryKey = event.target.dataset.key;
    let cards;

    if (categoryKey === 'clothes') {
        cards = [...clothes].sort(sortByNew);
    } else if (categoryKey === 'accessories') {
        cards = [...accessories].sort(sortByNew);
    } else {
        cards = merged;
    }

    document.querySelector('.js_gallery').innerHTML = '';
    cards.forEach((card) => {
        const {
            title, price, isNew, img, id,
        } = card;
        const cardHtml = makeProductCard(title, img, price, isNew, id);

        document.querySelector('.js_gallery').innerHTML += cardHtml;
    });
    addCardClickEventListener();
};

document.querySelectorAll('.category').forEach((button) => {
    button.addEventListener('change', cardsDisplay);
});
