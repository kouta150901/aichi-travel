// メモの追加ボタン
document.querySelector(".add-memo").addEventListener("click", function () {

    const container = document.querySelector(".memo-container");

    container.appendChild(createMemo("新しいメモ"));

    saveMemos();

});


// メモを作成する関数
function createMemo(text) {

    let memo = document.createElement("div");

    memo.className = "memo";

    memo.innerHTML = `
        <button class="delete-memo">×</button>
        <div class="memo-text" contenteditable="true">${text}</div>
    `;

    return memo;

}


// メモ削除
document.addEventListener("click", function (e) {

    if (e.target.classList.contains("delete-memo")) {

        e.target.parentElement.remove();

        saveMemos();

    }

});


// メモを保存
function saveMemos() {

    const memos = document.querySelectorAll(".memo-text");

    const texts = [...memos].map(memo => memo.innerText);

    localStorage.setItem("memos", JSON.stringify(texts));

}


// メモを読み込む
function loadMemos() {

    const saved = localStorage.getItem("memos");

    if (!saved) return;

    const texts = JSON.parse(saved);

    const container = document.querySelector(".memo-container");

    // HTMLに書いてある初期メモを削除
    container.innerHTML = "";

    texts.forEach(function (text) {

        container.appendChild(createMemo(text));

    });

}


// 入力が1秒止まったら保存
let timer;

document.addEventListener("input", function (e) {

    if (!e.target.classList.contains("memo-text")) return;

    clearTimeout(timer);

    timer = setTimeout(function () {

        saveMemos();

    }, 1000);

});


// ページ読み込み時に保存したメモを復元
loadMemos();