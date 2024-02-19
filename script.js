const inputTexts = document.querySelectorAll('.inputText');
const nextStepButtons = document.querySelectorAll('.nextStepButton');
const goBackButtons = document.querySelectorAll('.goBackButton');
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
const stepPage4 = document.querySelector('.stepPage4');
const endScreen = document.querySelector('.endScreen');

const selectedPlanTitle = document.querySelector('.selectedPlanTitle');
const selectedMainPrice = document.querySelector('.selectedMainPrice');

const selectedAddOnTitle = document.querySelector('.selectedAddOnTitle');
const selectedAddOnPrice = document.querySelector('.selectedAddOnPrice');

nextStepButtons.forEach(nextStepButton => {
    nextStepButton.addEventListener('click', () => {
        if(currentStep === 1) {
            step1();
        }
        else if(currentStep === 2) {
            currentStep++;
            step2();
        }
        else if(currentStep === 3) {
            currentStep++;
            step3();
        }
        else if(currentStep === 4) {
            step4();
        }
    });
})

goBackButtons.forEach(goBackButton => {
    goBackButton.addEventListener('click', () => {
        if(currentStep === 4) {
            currentStep--;
            step3();
        }
        else if(currentStep === 3) {
            currentStep--;
            step2();
        }
        else if(currentStep === 2) {
            currentStep--;
            step1();
        }
        else if(currentStep === 1) {
            currentStep--;
            step4();
        }
    })
})

function step1() {
    checkInputFields();             
    console.log(currentStep);
    stepPage1.classList.add('hidden');
    stepPage2.classList.remove('hidden');
    stepPage3.classList.add('hidden');
    stepPage4.classList.add('hidden');
}

function step2() {
    console.log(currentStep);
    stepPage1.classList.add('hidden');
    stepPage2.classList.add('hidden');
    stepPage3.classList.remove('hidden');
    stepPage4.classList.add('hidden');
}

function step3() {
    console.log(currentStep);
    stepPage1.classList.add('hidden');
    stepPage2.classList.add('hidden');
    stepPage3.classList.add('hidden');
    stepPage4.classList.remove('hidden');
}

function step4() {
    console.log(currentStep);
    stepPage1.classList.add('hidden');
    stepPage2.classList.add('hidden');
    stepPage3.classList.add('hidden');
    stepPage4.classList.add('hidden');
    endScreen.classList.remove('hidden');
}


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


        //pokazuje wybrany tytul i cene z items 
        if (item.classList.contains('selectedItem')) {
            const itemTitle = item.querySelector('.itemTitle');
            const itemPrice = item.querySelector('.itemPrice');
            selectedPlanTitle.textContent = itemTitle.textContent;
            selectedMainPrice.textContent = itemPrice.textContent;
        } 
    });

    

});

    //step 3
    const barItems = document.querySelectorAll('.barItem');

    barItems.forEach(barItem => {
    const checkbox = barItem.querySelector('.checkbox');

    barItem.addEventListener('click', () => {
        barItem.classList.toggle('selectedItem');
        checkbox.checked = !checkbox.checked;

        if(barItem.classList.contains('selectedItem')) {
            const selectedAddOn = document.createElement('div');
            selectedAddOn.classList.add('selectedAddOn');

            const selectedAddOnTitle = document.createElement('div');
            selectedAddOnTitle.classList.add('selectedAddOnTitle');
            selectedAddOnTitle.textContent = barItem.querySelector('.barTitle').textContent;
            selectedAddOn.appendChild(selectedAddOnTitle);

            const selectedAddOnPrice = document.createElement('div');
            selectedAddOnPrice.classList.add('selectedAddOnPrice');
            selectedAddOnPrice.textContent = barItem.querySelector('.barPrice').textContent;
            selectedAddOn.appendChild(selectedAddOnPrice);

            summaryBox.appendChild(selectedAddOn);

            // selectedAddOnTitle.textContent = title.textContent;
            // selectedAddOnPrice.textContent = price.textContent;
        }
    });

    
});

const summaryBox = document.querySelector('.summaryBox');


function summary() {
    
}