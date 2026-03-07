document.querySelector(".add-memo").addEventListener("click", function () {

    let container = document.querySelector(".memo-container");

    let memo = document.createElement("div");

    memo.className = "memo";

    memo.innerHTML = `
<button class="delete-memo">×</button>
<div class="memo-text" contenteditable="true">新しいメモ</div>
`;

    container.appendChild(memo);

});


document.addEventListener("click", function (e) {

    if (e.target.classList.contains("delete-memo")) {

        e.target.parentElement.remove();

    }

});