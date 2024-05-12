@font-face {
    font-family: 'NaikaiFont-Bold';
    src: url('font/NaikaiFont-Bold.ttf') format('truetype');
}

@font-face {
    font-family: 'NaikaiFont-ExtraLight';
    src: url('font/NaikaiFont-ExtraLight.ttf') format('truetype');
}

@font-face {
    font-family: 'NaikaiFont-Light';
    src: url('font/NaikaiFont-Light.ttf') format('truetype');
}

@font-face {
    font-family: 'NaikaiFont-Regular-Lite';
    src: url('font/NaikaiFont-Regular-Lite.ttf') format('truetype');
}

@font-face {
    font-family: 'NaikaiFont-Regular';
    src: url('font/NaikaiFont-Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'NaikaiFont-SemiBold';
    src: url('font/NaikaiFont-SemiBold.ttf') format('truetype');
}


@media only screen and (max-width: 700px) {
    #sssscake {
        width: 60px; 
        height: 60px; 
        border-radius: 50%; 
        margin-right: 20px
    }

    
    #shopping-cart {
        margin-left: auto;
        width: 30px; /* 调整购物车的宽度 */
        height: 30px; /* 调整购物车的高度 */
        margin-right: 28px!important; /* 调整购物车的右边距 */
    }

    nav ul li {
        display: inline-block !important;
        margin-right: 10px !important;
        font-size: 0.8em !important;
    }
    


    /* 将 main 中的文字大小缩小 */
    main {
        font-size: 10px; /* 你可以根据需要设置合适的大小 */
    }

    body {
        font-family: 'NaikaiFont-Regular', 'NaikaiFont-Regular-Lite', 'NaikaiFont-SemiBold', 'NaikaiFont-Light', 'NaikaiFont-ExtraLight', 'NaikaiFont-Bold', Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #ffe6e6; /* 設置底色為粉紅色 */
        position: relative; /* 讓頁面的滾動不影響 header 的位置 */
        overflow-x: hidden; /* 隱藏水平滾動條 */
    }
    
    /* 将 footer 中的文字大小缩小 */
    footer p {
        font-size: 10px; /* 你可以根据需要设置合适的大小 */
    }

    #desserts {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        max-width: 80%; 
        margin: 0 auto; 
        background-color: #ffffff; 
    }
    

    .dessert-image {
        max-width: 95%; /* 图像的最大宽度为其父容器的100% */
        height: auto; /* 图像的高度根据宽度自动调整 */
        border-radius: 20px;
        margin-right: 200px;
    }

    .description-container {
        margin-left: 20px!important;
        font-size: 28px!important;
    }
    
    .dessert-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-grow: 1;
    }
    
    .dessert-info h2 {
        margin: 0;
        margin-bottom: 20px!important;
        font-size: 24px!important;
    }
    
    .dessert-info p {
        margin: 0;
        font-size: 12px!important;
    }
    
    .dessert-info span.price {
        font-size: 10px!important;
    }
    
    .dessert-description {
        flex-grow: 2;
        margin-left: 10px!important;
    }
    .spacer { 
        height: 180px!important; 
    }
    
}






body {
    font-family: 'NaikaiFont-Regular', 'NaikaiFont-Regular-Lite', 'NaikaiFont-SemiBold', 'NaikaiFont-Light', 'NaikaiFont-ExtraLight', 'NaikaiFont-Bold', Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #ffe6e6; /* 設置底色為粉紅色 */
    position: relative; /* 讓頁面的滾動不影響 header 的位置 */
}

header {
    background-color: #ffffff;
    padding: 20px;
    text-align: center;
    margin-bottom: 20px;
    position: fixed; /* 將 header 固定在頂部 */
    width: 100%; /* 設置 header 寬度為 100% */
    top: 0; /* 將 header 定位在頂部 */
    z-index: 1000; /* 設置 z-index 以確保 header 位於所有內容的上方 */
}

#sssscake {
    width: 100px; 
    height: 100px; 
    border-radius: 50%; 
    margin-right: 20px
}

#shopping-cart {
    margin-left: auto; /* 將購物車置於最右邊 */
    margin-right: 300px; /* 與其他元素保持一定的間距 */
}


.header-container {
    display: flex;
    justify-content: space-between; /* 將內容分散排列 */
    align-items: center; /* 垂直置中 */
}

.header-links {
    display: flex; /* 將連結設置為 flex 容器 */
    align-items: center; /* 垂直置中 */
}

.header-links a {
    margin-left: 20px; /* 調整連結之間的間距 */
}

header h1 {
    margin: 0;
    color: #bf360c;
}

nav {
    background-color: #ffffff; 
    text-align: center; 
    padding: 5px 0; 
    font-family: 'NaikaiFont-Regular-Lite', Arial, sans-serif;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav ul li {
    display: inline-block;
    margin-right: 20px;
    
}

nav ul li a {
    display: block;
    color: #000000; 
    text-decoration: none;
    font-size: 1.5em; 
    transition: font-size 0.2s; 
}

nav ul li a:hover {
    font-size: 2.3em; /* 滑鼠碰到但是未點擊時，放大文字 */
}

main {
    padding: 20px;
    margin-top: 100px; /* 調整 main 的上邊距以避免被 header 覆蓋 */
}

footer {
    position: fixed;
    bottom: 0;
    background-color: #ffccbc;
    padding: 10px; 
    text-align: center; 
    width: 100%; 
}
#desserts main p {
    text-align: center;
}


#desserts {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 1200px; 
    max-width: 80%; 
    margin: 0 auto; 
    background-color: #ffffff; 
}

#desserts-spacer {
    height: 48px; /* 设置空行的高度 */
}

.centered-text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh; 
}

.dessert-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%; /* 讓每組資訊佔滿容器寬度 */
    padding: 60px; /* 增加每組資訊的內邊距 */
    box-sizing: border-box; /* 讓內邊距和邊框計算在內容寬度內 */
}

.dessert-image {
    width: 500px;
    height: auto;
    border-radius: 10px;
    margin-right: 200px;
}

.description-container {
    font-size: 40px;
}

.dessert-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
}

.dessert-info h2 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 60px;
}

.dessert-info p {
    margin: 0;
    font-size: 32px;
}

.dessert-info span.price {
    font-size: 28px;
}

.dessert-description {
    flex-grow: 2;
    margin-left: 20px;
}


.spacer { 
    height: 260px; /* 調整空行的高度 */
}


