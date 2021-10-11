/* eslint-disable eqeqeq */
const clothes = [
    {
        id:      0,
        title:   'Классная футболка',
        price:   333,
        isNew:   false,
        img:     './src/assets/tshirt.jpg',
        details: 'Брендированная футболка от Qazaq Republic. Материал хлопок...',
    },
    {
        id:      1,
        title:   'Классное худи',
        price:   666,
        isNew:   true,
        img:     './src/assets/hood.jpg',
        details: 'Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%',
    },
    {
        id:      2,
        title:   'Классная красная футболка',
        price:   206,
        isNew:   true,
        img:     './src/assets/redshirt.png',
        details: 'Удобная красная футболка для дома',
    },
    {
        id:      3,
        title:   'Классная футболка',
        price:   218,
        isNew:   false,
        img:     './src/assets/tshirt.jpg',
        details: 'Брендированная футболка от Qazaq Republic. Материал хлопок...',
    },
    {
        id:      4,
        title:   'Классная футболка',
        price:   3433,
        isNew:   false,
        img:     './src/assets/tshirt.jpg',
        details: 'Брендированная футболка от Qazaq Republic. Материал хлопок...',
    },
    {
        id:      5,
        title:   'Классная футболка',
        price:   6636,
        isNew:   false,
        img:     './src/assets/tshirt.jpg',
        details: 'Брендированная футболка от Qazaq Republic. Материал хлопок...',
    },
    {
        id:      6,
        title:   'Классная футболка',
        price:   2026,
        isNew:   false,
        img:     './src/assets/tshirt.jpg',
        details: 'Брендированная футболка от Qazaq Republic. Материал хлопок...',
    },
    {
        id:      7,
        title:   'Классная футболка',
        price:   2181,
        isNew:   false,
        img:     './src/assets/tshirt.jpg',
        details: 'Брендированная футболка от Qazaq Republic. Материал хлопок...',
    },
];

const accessories = [
    {
        id:      8,
        title:   'Классная кружка',
        price:   2000,
        isNew:   true,
        img:     './src/assets/bottle.jpg',
        details: 'Бутылка для воды струбочкой',
    },
    {
        id:      9,
        title:   'Классная игрушка',
        price:   5000,
        isNew:   true,
        img:     './src/assets/horsetoy.png',
        details: 'Игрушка для детей',
    },
    {
        id:      10,
        title:   'Классная кружка',
        price:   2500,
        isNew:   false,
        img:     './src/assets/bottle.jpg',
        details: 'Бутылка для воды струбочкой',
    },
    {
        id:      11,
        title:   'Классная кружка',
        price:   2200,
        isNew:   false,
        img:     './src/assets/bottle.jpg',
        details: 'Бутылка для воды струбочкой',
    },
    {
        id:      12,
        title:   'Классная кружка',
        price:   1900,
        isNew:   false,
        img:     './src/assets/bottle.jpg',
        details: 'Бутылка для воды струбочкой',
    },
    {
        id:      13,
        title:   'Классная кружка',
        price:   3000,
        isNew:   false,
        img:     './src/assets/bottle.jpg',
        details: 'Бутылка для воды струбочкой',
    },
    {
        id:      14,
        title:   'Классная кружка',
        price:   4500,
        isNew:   false,
        img:     './src/assets/bottle.jpg',
        details: 'Бутылка для воды струбочкой',
    },
    {
        id:      15,
        title:   'Классная кружка',
        price:   999,
        isNew:   false,
        img:     './src/assets/bottle.jpg',
        details: 'Бутылка для воды струбочкой',
    },
];

const makeProductCard = (title, image, price, isNew, id) => ` <div class="card" data-index = ${id}>
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
    title, img, price, details, id,
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
                ${id >= 8 ? '' : `Как выбрать размер:<div class="howChooseText">
                Написать дяде Рику для уточнения.</div>`}
            </div>
        </div>
    </div>
</div>
</div>
`;

const compare = (a, b) => {
    if (a.isNew && b.isNew) {
        return 0;
    }

    if (b.isNew) {
        return 1;
    }

    return -1;
};

// initial setup
clothes.sort(compare);
clothes.forEach((card) => {
    const {
        title, price, isNew, img, id,
    } = card;
    const cardHtml = makeProductCard(title, img, price, isNew, id);

    document.querySelector('.js_gallery').innerHTML += cardHtml;
});

document.querySelectorAll('.js_radio_button').forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttoner = event.target;
        const categoryKey = buttoner.dataset.key;

        if (categoryKey === 'clothes') {
            document.querySelector('.js_gallery').innerHTML = '';
            clothes.sort(compare);
            clothes.forEach((card) => {
                const {
                    title, price, isNew, img, id,
                } = card;
                const cardHtml = makeProductCard(title, img, price, isNew, id);

                document.querySelector('.js_gallery').innerHTML += cardHtml;
            });
        }

        if (categoryKey === 'accessories') {
            document.querySelector('.js_gallery').innerHTML = '';
            accessories.sort(compare);
            accessories.forEach((card) => {
                const {
                    title, price, isNew, img, id,
                } = card;
                const cardHtml = makeProductCard(title, img, price, isNew, id);

                document.querySelector('.js_gallery').innerHTML += cardHtml;
            });
        }

        if (categoryKey === 'all') {
            document.querySelector('.js_gallery').innerHTML = '';
            const merged = accessories.concat(clothes);

            merged.sort(compare);
            merged.forEach((card) => {
                const {
                    title, price, isNew, img, id,
                } = card;
                const cardHtml = makeProductCard(title, img, price, isNew, id);

                document.querySelector('.js_gallery').innerHTML += cardHtml;
            });
        }
    });
});

document.addEventListener('click', (e) => {
    const { index } = e.target.closest('.card').dataset;
    let modal;

    if (index >= clothes.length) {
        modal = makeModalWindow(accessories.find(x => x.id.toString(10) === index));
    } else {
        modal = makeModalWindow(clothes.find(x => x.id.toString(10) === index));
    }

    document.querySelector('body').innerHTML += modal;
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('exit_icon')) {
        e.target.parentElement.remove();
    }
});
