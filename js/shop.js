document.getElementById("addBtn").onclick = addShop;

function addShop() {

    let name = document.getElementById("shopName").value;
    let type = document.getElementById("shopType").value;
    let menu = document.getElementById("shopMenu").value;
    let price = document.getElementById("shopPrice").value;
    let address = document.getElementById("shopAddress").value;
    let time = document.getElementById("shopTime").value;
    let image = document.getElementById("shopImage").value;

    let list = document.getElementById("shopList");

    let card = document.createElement("div");
    card.className = "shop-card " + type;

    card.innerHTML = `
<button class="delete-shop">×</button>

<img src="${image}" class="shop-img">

<div class="shop-info">
<h2>${name}</h2>
<p><b>有名メニュー</b>：${menu}</p>
<p><b>価格帯</b>：${price}</p>
<p><b>住所</b>：${address}</p>
<p><b>営業時間</b>：${time}</p>
</div>
`;

    list.appendChild(card);

    card.querySelector(".delete-shop").onclick = function () {
        card.remove();
    }

}


function deleteShop(event) {

    event.target.parentElement.remove();

}