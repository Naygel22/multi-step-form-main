const inputTexts = document.querySelectorAll('.inputText');
const nextStepButtons = document.querySelectorAll('.nextStepButton');
const goBackButtons = document.querySelectorAll('.goBackButton');
const errorTexts = document.querySelectorAll('.errorText');
let currentStep = 1;

const itemsPlans = document.querySelector('.items');
const toggleSwitch = document.querySelector('.toggleSwitch');
const toggleNameMonthly = document.querySelector('#toggleNameMonthly');
const toggleNameYearly = document.querySelector('#toggleNameYearly');

// const priceArcade = document.querySelector('.priceArcade');
// const priceAdvanced = document.querySelector('.priceAdvanced');
// const pricePro = document.querySelector('.pricePro');


const stepPage1 = document.querySelector('.stepPage1');
const stepPage2 = document.querySelector('.stepPage2');
const stepPage3 = document.querySelector('.stepPage3');
const stepPage4 = document.querySelector('.stepPage4');
const endScreen = document.querySelector('.endScreen');

const selectedPlanTitle = document.querySelector('.selectedPlanTitle');
const selectedMainPrice = document.querySelector('.selectedMainPrice');

const selectedAddOnTitle = document.querySelector('.selectedAddOnTitle');
const selectedAddOnPrice = document.querySelector('.selectedAddOnPrice');

const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const phoneInput = document.querySelector('#phoneInput');

const circles = document.querySelectorAll('.circleStepCounter');

const avaiablePlans = [
    {
        id: "Arcade",
        title: "Arcade", 
        icon: "assets/images/icon-arcade.svg", 
        price: {
            monthly: 9,
            yearly: 90
        }
    },
    {
        id: 'Advanced',
        title: "Advanced", 
        icon: "assets/images/icon-advanced.svg", 
        price: {
            monthly:12,
            yearly: 120
        }
    },
    {
        id: "Pro",
        title: "Pro", 
        icon: "assets/images/icon-pro.svg", 
        price: {
            monthly:15,
            yearly: 150
        }
    },
]

const avaiableAddons = [
    {
        id: "Online Service",
        title:"Online Service",
        description: "Access to multiplayer games",
        price: {
            monthly:1,
            yearly: 10
        }
    },
    {
        id: "Larger storage",
        title:"Larger storage",
        description: "Extra 1TB of cloud space",
        price: {
            monthly:2,
            yearly: 20
        }
    },
    {
        id: "Customizable profile",
        title:"Customizable profile",
        description: "Custom theme on your profile",
        price: {
            monthly:2,
            yearly: 20
        }
    },
]

const state = {
    name: '',
    email: '',
    phone: '',
    selectedPlanId:"",
    selectedPlanVersion: "",
    addons: []
}

nameInput.addEventListener('input', ()=>{
    const typedName = nameInput.value;
    state.name = typedName;
});

emailInput.addEventListener('input', ()=>{
    const typedEmail = emailInput.value;
    state.email = typedEmail;
});

phoneInput.addEventListener('input', ()=>{
    const typedPhone = phoneInput.value;
    state.phone = typedPhone;
});


function createPlans() {
    // const sectionTitle = document.createElement('h1');
    // sectionTitle.classList.add('sectionTitle');
    // sectionTitle.textContent = "Select your plan";
    // stepPage2.appendChild(sectionTitle);

    // const sectionInfo = document.createElement('p');
    // sectionInfo.classList.add('sectionInfo');
    // sectionInfo.textContent = "You have the option of monthly or yearly billing.";
    // stepPage2.appendChild(sectionInfo);

    avaiablePlans.forEach(plan => {
        const item = document.createElement('div');
        item.classList.add('item');
        itemsPlans.appendChild(item);

        const img = document.createElement('img');
        img.src = plan.icon;
        item.appendChild(img);

        const itemTitle = document.createElement('div');
        itemTitle.classList.add('itemTitle');
        itemTitle.textContent = plan.title;
        item.appendChild(itemTitle);

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('itemPrice');
        itemPrice.textContent = `$${plan.price.monthly}/mo`;
        item.appendChild(itemPrice);

        
            const bonus = document.createElement('div');
            bonus.classList.add('bonus');
            bonus.classList.add('hidden');
            bonus.textContent = '2 months free';
            item.appendChild(bonus);
        


        item.addEventListener('click', () => {
            console.log(state);
            console.log(item)
            const clickedItemId = plan.id;
            state.selectedPlanId = clickedItemId
            console.log(state);
            const items = document.querySelectorAll('.item');
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
            } else {
                state.selectedPlanId = "";
            }
            console.log(state);
        });


        const bonuses = document.querySelectorAll('.bonus');
        state.selectedPlanVersion = toggleNameMonthly.textContent;
        toggleSwitch.addEventListener('change', () => {
                
            if (toggleSwitch.checked) {
                
                toggleNameMonthly.classList.remove("toggleNameActivated");
                toggleNameYearly.classList.add("toggleNameActivated");
                itemPrice.textContent = `$${plan.price.yearly}/yr`;
                bonuses.forEach(bonus => bonus.classList.remove('hidden'));
                state.selectedPlanVersion = toggleNameYearly.textContent;
                if (state.selectedPlanVersion === toggleNameYearly.textContent) {
                    const itemPrice = item.querySelector('.itemPrice');
                    selectedMainPrice.textContent = itemPrice.textContent;
                }
            } else {
                toggleNameMonthly.classList.add("toggleNameActivated");
                toggleNameYearly.classList.remove("toggleNameActivated");
                itemPrice.textContent = `$${plan.price.monthly}/mo`;
                bonuses.forEach(bonus => bonus.classList.add('hidden'));
                state.selectedPlanVersion = toggleNameMonthly.textContent;

                if (state.selectedPlanVersion === toggleNameMonthly.textContent) {
                    const itemPrice = item.querySelector('.itemPrice');
                    selectedMainPrice.textContent = itemPrice.textContent;
                }
            }  console.log(state);
        });
    })
    
}

createPlans();

const bars = document.querySelector('.bars');

function createAddons() {
    avaiableAddons.forEach(addon => {
        const barItem = document.createElement('div');
        barItem.classList.add('barItem');
        bars.appendChild(barItem);

        const checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add('checkbox');
        barItem.appendChild(checkbox);

        const barText = document.createElement('div');
        barText.classList.add('barText');
        barItem.appendChild(barText);

        const barTitle = document.createElement('div');
        barTitle.classList.add('barTitle');
        barTitle.textContent = addon.title;
        barText.appendChild(barTitle);

        const barInfo = document.createElement('div');
        barInfo.classList.add('barInfo');
        barInfo.textContent = addon.description;
        barText.appendChild(barInfo);

        const barPrice = document.createElement('div');
        barPrice.classList.add('barPrice');
        barPrice.textContent = `$${addon.price.monthly}/mo`;
        barItem.appendChild(barPrice);

        toggleSwitch.addEventListener('change', ()=>{
            if (toggleSwitch.checked) {
                barPrice.textContent = `$${addon.price.yearly}/yr`;
            } else {
                barPrice.textContent = `$${addon.price.monthly}/mo`;
            }
        })
    });
}

createAddons();



function getSelectedPlanInfo() {
    const userSelectedName = state.name;
    const userSelectedEmail = state.email;
    const userSelectedPhone = state.phone;
    const userSelectedPlan = state.selectedPlanId;
    const userSelectedPlanVersion = state.selectedPlanVersion;

    const plan = avaiablePlans.find(item => item.id === userSelectedPlan);
}


nextStepButtons.forEach(nextStepButton => {
    nextStepButton.addEventListener('click', () => {
        if (currentStep === 1) {
            const isStep1Valid = checkInputFields();
            if (isStep1Valid) {
                currentStep++;
                goToStep2();
            }
        }
        else if (currentStep === 2) {
            currentStep++;
            goToStep3();
        }
        else if (currentStep === 3) {
            currentStep++;
            goToStep4();
        }
        else if (currentStep === 4) {
            goToEndScreen();
        }
    });
})

goBackButtons.forEach(goBackButton => {
    goBackButton.addEventListener('click', () => {
        if (currentStep === 4) {
            currentStep--;
            goToStep3();
        }
        else if (currentStep === 3) {
            currentStep--;
            goToStep2();
        }
        else if (currentStep === 2) {
            currentStep--;
            goToStep1();
        }
    })
})

function goToStep1() {
    console.log(currentStep);
    stepPage1.classList.remove('hidden');
    stepPage2.classList.add('hidden');
    stepPage3.classList.add('hidden');
    stepPage4.classList.add('hidden');
    updateCirclesBySteps();
}

function goToStep2() {
    
    stepPage1.classList.add('hidden');
    stepPage2.classList.remove('hidden');
    stepPage3.classList.add('hidden');
    stepPage4.classList.add('hidden');
    updateCirclesBySteps();
}

function goToStep3() {
    console.log(currentStep);
    stepPage1.classList.add('hidden');
    stepPage2.classList.add('hidden');
    stepPage3.classList.remove('hidden');
    stepPage4.classList.add('hidden');
    updateCirclesBySteps();
}

function goToStep4() {
    console.log(currentStep);
    stepPage1.classList.add('hidden');
    stepPage2.classList.add('hidden');
    stepPage3.classList.add('hidden');
    stepPage4.classList.remove('hidden');
    updateCirclesBySteps();
}

function goToEndScreen() {
    console.log(currentStep);
    stepPage1.classList.add('hidden');
    stepPage2.classList.add('hidden');
    stepPage3.classList.add('hidden');
    stepPage4.classList.add('hidden');
    endScreen.classList.remove('hidden');
}


// function checkPage() {
//     if (!stepPage1.classList.contains('hidden')) {
//         return 1;
//     }
//     if (!stepPage2.classList.contains('hidden')) {
//         return 2;
//     }
//     if (!stepPage3.classList.contains('hidden')) {
//         return 3;
//     }
// }

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

    return bracketsAreFilled;
}




// step 2
// items.forEach(item => {
//     item.addEventListener('click', () => {

//         console.log(item)
//         const clickedItemId = item.id
//         state.selectedPlanId = clickedItemId

//         // Odznacz pozostałe elementy
//         items.forEach(otherItem => {
//             if (otherItem !== item) {
//                 otherItem.classList.remove('selectedItem');
//             }
//         });

//         // Zaznacz/Wyłącz aktualny element
//         item.classList.toggle('selectedItem');


//         //pokazuje wybrany tytul i cene z items 
//         if (item.classList.contains('selectedItem')) {
//             const itemTitle = item.querySelector('.itemTitle');
//             const itemPrice = item.querySelector('.itemPrice');
//             selectedPlanTitle.textContent = itemTitle.textContent;
//             selectedMainPrice.textContent = itemPrice.textContent;
//         } else {
//             state.selectedPlanId = "";
//         }
//     });



// });
const priceArray = [];
//step 4
const barItems = document.querySelectorAll('.barItem');
const summaryBox = document.querySelector('.summaryBox');

barItems.forEach(barItem => {
    const checkbox = barItem.querySelector('.checkbox');

    barItem.addEventListener('click', () => {
        barItem.classList.toggle('selectedItem');
        checkbox.checked = !checkbox.checked;

        if (barItem.classList.contains('selectedItem')) {
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

            priceArray.push(selectedAddOnPrice.textContent);
            console.log(priceArray);
           
        } else { // nie wiem czy to dobrze
            const selectedAddOn = document.querySelector('.selectedAddOn');
            selectedAddOn.remove();
        }
    });


});

const totalPrice = document.querySelector('.totalPrice');


function summary() {

}

const changeButton = document.querySelector('.changeButton');
changeButton.addEventListener('click', ()=> {
    goToStep2();
    currentStep = 2;
})


function updateCirclesBySteps() {
    circles.forEach((circle, index) => {
        if (index + 1 === currentStep) {
            circle.classList.add('selectedCircle');
        } else {
            circle.classList.remove('selectedCircle');
        }
    });
}

updateCirclesBySteps();
