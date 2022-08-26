var i = 0;
function addToSelected(element) {
    if (i < 5) {
        const playerName = element.parentNode.parentNode.children[0].innerText;
        //  adding to list 
        const ul = document.getElementById("list");
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(playerName));
        ul.appendChild(li);
        i = i + 1;
        document.getElementById(element.id).setAttribute('disabled', '');
    }
    else {
        alert("Only 5 player can be selected");
    }
}

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
    if (isNaN(managerExpense) || isNaN(coachExpense)) {
        alert("Please input valid Data type")
    }
    else {
        const playerExpenseFeild1 = document.getElementById('player-expence-feild').innerText;
        const playerExpenseTotal = parseFloat(playerExpenseFeild1);
        const total = managerExpense + coachExpense + playerExpenseTotal;
        document.getElementById('total-costing').innerText = total;
    }
})