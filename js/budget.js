// 行を作成する関数
function createExpense(date, money, purpose) {

    let table = document.getElementById("budget-body");

    let row = table.insertRow();

    // 削除ボタン
    let deleteCell = row.insertCell(0);
    deleteCell.innerHTML = "<button class='delete-expense'>×</button>";

    // 日付
    row.insertCell(1).innerText = date;

    // 金額
    row.insertCell(2).innerText = "¥" + money;

    // 用途
    row.insertCell(3).innerText = purpose;

    // 削除処理
    deleteCell.querySelector("button").onclick = function () {

        row.remove();

        updateTotal();

        saveExpenses();

    };

}


// 合計金額を更新
function updateTotal() {

    let total = 0;

    document.querySelectorAll("#budget-body tr").forEach(function (row) {

        let money = row.cells[2].innerText.replace("¥", "");

        total += Number(money);

    });

    document.getElementById("total").innerText = total;

}


// 費用追加
function addExpense() {

    let date = document.getElementById("date").value;
    let money = document.getElementById("money").value;
    let purpose = document.getElementById("purpose").value;

    if (money === "") return;

    createExpense(date, money, purpose);

    updateTotal();

    saveExpenses();

    document.getElementById("money").value = "";
    document.getElementById("purpose").value = "";

}


// 保存
function saveExpenses() {

    let expenses = [];

    document.querySelectorAll("#budget-body tr").forEach(function (row) {

        expenses.push({

            date: row.cells[1].innerText,

            money: row.cells[2].innerText.replace("¥", ""),

            purpose: row.cells[3].innerText

        });

    });

    localStorage.setItem("expenses", JSON.stringify(expenses));

}


// 読み込み
function loadExpenses() {

    const saved = localStorage.getItem("expenses");

    if (!saved) return;

    const expenses = JSON.parse(saved);

    document.getElementById("budget-body").innerHTML = "";

    expenses.forEach(function (expense) {

        createExpense(
            expense.date,
            expense.money,
            expense.purpose
        );

    });

    updateTotal();

}


// ページを開いたら読み込む
loadExpenses();