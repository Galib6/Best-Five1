// Player envent handler start
var i = 0;
document.getElementById('messi').addEventListener('click', function () {
    if (i < 5) {
        playerListUpdate('name-messi');
        document.getElementById('messi').setAttribute('disabled', '');
    }
    else {
        alert("Only 5 player can be selected");
    }
})

document.getElementById('neymar').addEventListener('click', function () {
    if (i < 5) {
        playerListUpdate('name-neymar');
        document.getElementById('neymar').setAttribute('disabled', '');
    }
    else {
        alert("Only 5 player can be selected");
    }
})

document.getElementById('mbappe').addEventListener('click', function () {
    if (i < 5) {
        playerListUpdate('name-mbappe');
        document.getElementById('mbappe').setAttribute('disabled', '');
    }
    else {
        alert("Only 5 player can be selected");
    }
})

document.getElementById('vitor').addEventListener('click', function () {
    if (i < 5) {
        playerListUpdate('name-vitor');
        document.getElementById('vitor').setAttribute('disabled', '');
    }
    else {
        alert("Only 5 player can be selected");
    }
})

document.getElementById('ramos').addEventListener('click', function () {
    if (i < 5) {
        playerListUpdate('name-ramos');
        document.getElementById('ramos').setAttribute('disabled', '');
    }
    else {
        alert("Only 5 player can be selected");
    }
})

document.getElementById('renato').addEventListener('click', function () {
    if (i < 5) {
        playerListUpdate('name-renato');
        document.getElementById('renato').setAttribute('disabled', '');
    }
    else {
        alert("Only 5 player can be selected");
    }
})


document.getElementById('ronaldo').addEventListener('click', function () {
    if (i < 5) {
        playerListUpdate('name-ronaldo');
        document.getElementById('ronaldo').setAttribute('disabled', '');
    }
    else {
        alert("Only 5 player can be selected");
    }
})

document.getElementById('salah').addEventListener('click', function () {
    if (i < 5) {
        playerListUpdate('name-salah');
        document.getElementById('salah').setAttribute('disabled', '');
    }
    else {
        alert("Only 5 player can be selected");
    }
})

document.getElementById('pogba').addEventListener('click', function () {
    if (i < 5) {
        playerListUpdate('name-pogba');
        document.getElementById('pogba').setAttribute('disabled', '');
    }
    else {
        alert("Only 5 player can be selected");
    }
})


// Player event handler end
document.getElementById('player-expence').addEventListener('click', function () {
    const perPlayerFeild = document.getElementById('per-player-Feild');
    const perPlayerString = perPlayerFeild.value;
    const perPlayer = parseFloat(perPlayerString);
    if (isNaN(perPlayer)) {
        alert("Please input valid Data type")
    }
    else {
        const playerExpence = i * perPlayer;
        document.getElementById('player-expence-feild').innerText = playerExpence;

    }
})

document.getElementById('calculate-total').addEventListener('click', function () {
    const managerFeild = document.getElementById('manager-expense');
    const managerExpenseString = managerFeild.value;
    const managerExpense = parseFloat(managerExpenseString);

    const coachFeild = document.getElementById('coach-expense');
    const coachExpenseString = coachFeild.value;
    const coachExpense = parseFloat(coachExpenseString);
    if (isNaN(managerExpense) && isNaN(coachExpense)) {
        alert("Please input valid Data type")
    }
    else {
        const playerExpenseFeild1 = document.getElementById('player-expence-feild').innerText;
        const playerExpenseTotal = parseFloat(playerExpenseFeild1);
        const total = managerExpense + coachExpense + playerExpenseTotal;
        document.getElementById('total-costing').innerText = total;
    }
})
