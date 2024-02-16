const inputTexts = document.querySelectorAll('.inputText');
const nextStepButton = document.querySelector('.nextStepButton');
const errorTexts = document.querySelectorAll('.errorText');
let currentStep = 1;
const items = document.querySelectorAll('.item'); //changed
const toggleSwitch = document.querySelector('.toggleSwitch');
const toggleNameMonthly = document.querySelector('#toggleNameMonthly');
const toggleNameYearly = document.querySelector('#toggleNameYearly');

const priceArcade = document.querySelector('.priceArcade');
const priceAdvanced = document.querySelector('.priceAdvanced');
const pricePro = document.querySelector('.pricePro');
const bonuses = document.querySelectorAll('.bonus');

const stepPage1 = document.querySelector('.stepPage1');
const stepPage2 = document.querySelector('.stepPage2');
const stepPage3 = document.querySelector('.stepPage3');

nextStepButton.addEventListener('click', () => {
    currentStep = checkPage();
    if(currentStep === 1) {
        stepPage1.classList.remove('hidden');
        stepPage2.classList.add('hidden');
        stepPage3.classList.add('hidden');
        checkInputFields();
        console.log(currentStep);
    }
    if(currentStep === 2) {
        currentStep++;
        stepPage1.classList.add('hidden');
        stepPage2.classList.remove('hidden');
        stepPage3.classList.add('hidden');
        console.log(currentStep);
    }
    if(currentStep === 3) {
        stepPage1.classList.add('hidden');
        stepPage2.classList.add('hidden');
        stepPage3.classList.remove('hidden');
        
    }
});


function checkPage() {
    if (!stepPage1.classList.contains('hidden')) {
        return 1;
    }
    if (!stepPage2.classList.contains('hidden')) {
        return 2;
    }
    if (!stepPage3.classList.contains('hidden')) {
        return 3;
    }
}

function checkInputFields() {
    let bracketsAreFilled = true;

    inputTexts.forEach((element, index) => {
        const errorText = errorTexts[index];

        if (element.value === '') {
            element.classList.add('errorInput');
            errorText.classList.remove('hidden');
            bracketsAreFilled = false;
        } else {
            element.classList.remove('errorInput');
            errorText.classList.add('hidden');
        }
    });
    if(bracketsAreFilled) {
        currentStep++;
        console.log(currentStep)
    }
}
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

   // step 2
items.forEach(item => {
    item.addEventListener('click', () => {
        // Odznacz pozostałe elementy
        items.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('selectedItem');
            }
        });

        // Zaznacz/Wyłącz aktualny element
        item.classList.toggle('selectedItem');
    });
});

    


    //step 3
    const barItems = document.querySelectorAll('.barItem');

    barItems.forEach(barItem => {
    const checkbox = barItem.querySelector('.checkbox');

    barItem.addEventListener('click', () => {
        barItem.classList.toggle('selectedItem');
        checkbox.checked = !checkbox.checked;
    });
});


