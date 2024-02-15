const inputTexts = document.querySelectorAll('.inputText');
const nextStepButton = document.querySelector('.nextStepButton');
const errorTexts = document.querySelectorAll('.errorText');
let currentStep = 1;
const items = document.querySelector('.items');
const toggleSwitch = document.querySelector('.toggleSwitch');
const toggleNameMonthly = document.querySelector('#toggleNameMonthly');
const toggleNameYearly = document.querySelector('#toggleNameYearly');

const priceArcade = document.querySelector('.priceArcade');
const priceAdvanced = document.querySelector('.priceAdvanced');
const pricePro = document.querySelector('.pricePro');
const bonuses = document.querySelectorAll('.bonus');

nextStepButton.addEventListener('click', () => {
    checkInputFields();
});

function checkInputFields() {
    inputTexts.forEach((element, index) => {
        const errorText = errorTexts[index];

        if (element.value === '') {
            element.classList.add('errorInput');
            errorText.classList.remove('hidden');
        } else {
            element.classList.remove('errorInput');
            errorText.classList.add('hidden');
        }
    });
}

// const planItems = {
//     "Arcade": {
//         image: "assets/images/icon-arcade.svg",
//         title: "Arcade",
//         priceMonthly: "$9/mo",
//         priceYearly: "$90/yr",
//         bonus: "2 months free"
//     },
//     "Advanced": {
//         image: "assets/images/icon-advanced.svg",
//         title: "Advanced",
//         priceMonthly: "$12/mo",
//         priceYearly: "$120/yr",
//         bonus: "2 months free"
//     },
//     "Pro": {
//         image: "assets/images/icon-pro.svg",
//         title: "Pro",
//         priceMonthly: "$15/mo",
//         priceYearly: "$150/yr",
//         bonus: "2 months free"
//     }
// }

// function createPlanItems() {
//     for (const key in planItems) {
//         const item = document.createElement('div');
//         item.classList.add('item');
//         items.appendChild(item);

//         const img = document.createElement('img');
//         img.src = planItems[key].image;
//         item.appendChild(img);

//         const title = document.createElement('div');
//         title.textContent = planItems[key].title;
//         title.classList.add('itemTitle')
//         item.appendChild(title);

//         const price = document.createElement('div');
//         price.textContent = planItems[key].priceMonthly;
//         item.appendChild(price);
//         price.classList.add('price');

       
//     }
// }

// createPlanItems();


    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            toggleNameMonthly.classList.remove("toggleNameActivated");
            toggleNameYearly.classList.add("toggleNameActivated");
            priceArcade.textContent = '$90/yr';
            priceAdvanced.textContent = '$120/yr';
            pricePro.textContent = '$150/yr';
            bonuses.forEach(bonus => bonus.classList.remove('hidden'));
            
        } else {
            toggleNameMonthly.classList.add("toggleNameActivated");
            toggleNameYearly.classList.remove("toggleNameActivated");
            priceArcade.textContent = '$9/mo';
            priceAdvanced.textContent = '$12/mo';
            pricePro.textContent = '$15/mo';
            bonuses.forEach(bonus => bonus.classList.add('hidden'));
        }
    });

