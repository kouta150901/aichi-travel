function openDay(index) {

    let cards = document.querySelectorAll(".file-card");

    cards.forEach(card => {
        card.classList.remove("active");
    });

    cards[index].classList.add("active");

}


function insertSchedule(button) {

    let timeline = button.closest(".timeline");

    let item = document.createElement("div");

    item.className = "timeline-item";

    item.innerHTML = `
<span contenteditable="true">新しい予定</span>
<button class="delete-btn" onclick="deleteSchedule(event)">×</button>
`;

    let line = document.createElement("div");

    line.className = "insert-line";

    line.innerHTML = `<button onclick="insertSchedule(this)">＋</button>`;

    button.parentElement.after(item);

    item.after(line);

}


function deleteSchedule(event) {

    event.stopPropagation();

    let item = event.target.parentElement;

    let line = item.nextElementSibling;

    item.remove();

    if (line && line.classList.contains("insert-line")) {

        line.remove();

    }

}