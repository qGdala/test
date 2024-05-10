document.addEventListener("DOMContentLoaded", function() {
    const dessertsSection = document.getElementById("desserts");

    const desserts = [
        { name: "巧克力蛋糕", price: "$10" },
        { name: "草莓奶油蛋糕", price: "$12" },
        { name: "提拉米蘇", price: "$15" },
        { name: "巧克力曲奇", price: "$8" },
        { name: "水果塔", price: "$14" }
    ];

    desserts.forEach(dessert => {
        const dessertCard = document.createElement("div");
        dessertCard.classList.add("dessert-card");
        dessertCard.innerHTML = `
            <h2>${dessert.name}</h2>
            <p>價格: ${dessert.price}</p>
        `;
        dessertsSection.appendChild(dessertCard);
    });
});