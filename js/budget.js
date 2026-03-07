let total = 0;

function addExpense() {

    let date = document.getElementById("date").value;
    let money = document.getElementById("money").value;
    let purpose = document.getElementById("purpose").value;

    if (money === "") return;

    let table = document.getElementById("budget-body");

    let row = table.insertRow();

    /* 削除ボタン */

    let deleteCell = row.insertCell(0);

    deleteCell.innerHTML = "<button class='delete-expense'>×</button>";

    /* 日付 */

    row.insertCell(1).innerText = date;

    /* 金額 */

    row.insertCell(2).innerText = "¥" + money;

    /* 用途 */

    row.insertCell(3).innerText = purpose;

    /* 合計更新 */

    total += Number(money);

    document.getElementById("total").innerText = total;

    /* 削除処理 */

    deleteCell.querySelector("button").onclick = function () {

        total -= Number(money);

        document.getElementById("total").innerText = total;

        row.remove();

    };

    document.getElementById("money").value = "";
    document.getElementById("purpose").value = "";

}