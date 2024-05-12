document.addEventListener("DOMContentLoaded", function() {
    const dessertsSection = document.getElementById("desserts");

    const desserts = [
        { name: "<span style='color: #D2B48C;'> 旺萊桂花韻 </span>", price: " $ 1360", image: "../../test1/cakebase/OsmanthusOolong.png", description: "-⋆- ~!@#$%^&*()_+<br>-⋆- a!@#$%^&*()_+<br>-⋆- b!@#$%^&*()_+<br>-⋆- c!@#$%^&*()_+" },
        { name: "<span style='color: #8B4513;'> Mr.伯爵 </span>", price: " $ 1460 ", image: "../test1/cakebase/MrCount.png", description: "-⋆-  伯爵戚風<br>-⋆-  伯爵奶凍<br>-⋆-  手熬伯爵奶醬<br>-⋆-  日本蜜柑<br>-⋆-  伯爵香堤" },
        { name: "<span style='color: #503225;'> 可可貴妃 </span>", price: " $ 1560 ", image: "../test1/cakebase/CocoaImperialConcubine.png", description: "-⋆-  法芙娜可可戚風<br>-⋆-  巧克力慕斯<br>-⋆-  新鮮草莓<br>-⋆-  巧克力香堤夾餡<br>-⋆-  原味香堤抹面" },
    ];

    desserts.forEach((dessert, index) => {
        const dessertCard = document.createElement("div");
        dessertCard.classList.add("dessert-card");

        if (index === 0) {
            // 只對第一個容器添加空行
            const spacer = document.createElement("div");
            spacer.classList.add("spacer");
            dessertCard.appendChild(spacer);
        }

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        const image = document.createElement("img");
        image.src = dessert.image;
        image.alt = dessert.name;
        image.classList.add("dessert-image");
        imageContainer.appendChild(image);

        dessertCard.appendChild(imageContainer);

        const dessertInfo = document.createElement("div");
        dessertInfo.classList.add("dessert-info");
        dessertInfo.innerHTML = `
        <div class="dessert-info">
            <h2>${dessert.name}</h2>
            <p>~~~~~~~~~~~~~~~~~~~~~~~</p>
            <p>${dessert.description}</p>
            <p>價格: <span class="price">${dessert.price}</span></p>
        </div>
    
        `;
        dessertCard.appendChild(dessertInfo);

        dessertsSection.appendChild(dessertCard);
    });
});
