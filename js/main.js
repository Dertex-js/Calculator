//income inputs
const
    incomeSalary = document.getElementById('income-salary'),
    incomeFreelance = document.getElementById('income-freelance'),
    incomeExtra1 = document.getElementById('income-extra-1'),
    incomeExtra2 = document.getElementById('income-extra-2');

//costs inputs
const
    coastsFlat = document.getElementById('costs-flat'),
    coastsHouseServices = document.getElementById('costs-house-services'),
    coastsTransport = document.getElementById('costs-transport'),
    coastsCredit = document.getElementById('costs-credit');

//total inputs
const
    totalMonthInput = document.getElementById('total-month'),
    totalDayInput = document.getElementById('total-day'),
    totalYearInput = document.getElementById('total-year');

let totalMonth, totalDay, totalYear;

//money box
const
    moneyBoxRange = document.getElementById('money-box-range'),
    accumulationInput = document.getElementById('accumulation'),
    spend = document.getElementById('spend');

let accumulation = 0;
let totalPercents = 0;

const inputs = document.querySelectorAll('.input');
for(input of inputs){
    input.addEventListener('input', () => {
        countingAvailableMoney();
    })
}

const strToNum = str => str.value ? parseInt(str.value) : 0;

const countingAvailableMoney = () => {
    const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2);
    const totalCosts = strToNum(coastsFlat) + strToNum(coastsHouseServices) + strToNum(coastsTransport) + strToNum(coastsCredit);

    totalMonth = totalPerMonth - totalCosts;
    totalMonthInput.value = totalMonth;
}

moneyBoxRange.addEventListener('input', e => {
    const totalPercentEl = document.getElementById('total-percents');
    totalPercents = e.target.value;
    totalPercentEl.innerHTML = totalPercents;
})