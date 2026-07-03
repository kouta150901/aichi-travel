// カード切り替え
function openDay(index) {

    let cards = document.querySelectorAll(".file-card");

    cards.forEach(card => card.classList.remove("active"));

    cards[index].classList.add("active");

}


// 予定を作成
function createSchedule(text) {

    let item = document.createElement("div");

    item.className = "timeline-item";

    item.innerHTML = `
        <span contenteditable="true">${text}</span>
        <button class="delete-btn" onclick="deleteSchedule(event)">×</button>
    `;

    return item;

}


// ＋ボタンを作成
function createInsertLine() {

    let line = document.createElement("div");

    line.className = "insert-line";

    line.innerHTML = `<button onclick="insertSchedule(this)">＋</button>`;

    return line;

}


// 予定追加
function insertSchedule(button) {

    let item = createSchedule("新しい予定");

    let line = createInsertLine();

    button.parentElement.after(item);

    item.after(line);

    saveSchedules();

}


// 予定削除
function deleteSchedule(event) {

    event.stopPropagation();

    let item = event.target.parentElement;

    let line = item.nextElementSibling;

    item.remove();

    if (line && line.classList.contains("insert-line")) {

        line.remove();

    }

    saveSchedules();

}


// 保存
function saveSchedules() {

    let allDays = [];

    document.querySelectorAll(".timeline").forEach(function (timeline) {

        let schedules = [];

        timeline.querySelectorAll(".timeline-item span").forEach(function (span) {

            schedules.push(span.innerText);

        });

        allDays.push(schedules);

    });

    localStorage.setItem("schedules", JSON.stringify(allDays));

}


// 読み込み
function loadSchedules() {

    const saved = localStorage.getItem("schedules");

    if (!saved) return;

    const allDays = JSON.parse(saved);

    document.querySelectorAll(".timeline").forEach(function (timeline, index) {

        timeline.innerHTML = "";

        allDays[index].forEach(function (text) {

            timeline.appendChild(createSchedule(text));

            timeline.appendChild(createInsertLine());

        });

    });

}


// 入力後1秒で保存
let timer;

document.addEventListener("input", function (e) {

    if (e.target.tagName !== "SPAN") return;

    clearTimeout(timer);

    timer = setTimeout(function () {

        saveSchedules();

    }, 1000);

});


// 読み込み
loadSchedules();