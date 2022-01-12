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