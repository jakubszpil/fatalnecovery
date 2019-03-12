function creating() {
    var root = document.getElementById("root");
    root.innerHTML = 
    `<div class="bg"></div>
    <nav class="navigation">
    <div class="navHeader">
        <a class="logo link" href="index.html">
           Fatalne<span></span>Covery.pl
        </a>
        <input class="navBtn" id="navBtn" type="checkbox">
        <nav class="navMenu">
            <ul class="menuList">
                <li class="menuElement">
                    <a class="link menuLink" href="index.html">home</a>
                </li>
                <li class="menuElement">
                    <a class="link menuLink" href="about.html">o hobby</a>
                </li>
                <li class="menuElement">
                    <a class="link menuLink" href="gear.html">sprzęt</a>
                </li>
                <li class="menuElement">
                    <a class="link menuLink" href="media.html">media</a>
                </li>
                <li class="menuElement">
                    <a class="link menuLink" href="gallery.html">galeria</a>
                </li>
            </ul>
        </nav>
        <label class="navBtnLabel" for="navBtn">
            <span></span>
        </label>
        <div class="socials socialsTop">
            <a class="social facebook" target="_blanc" href="https://www.facebook.com/kuba.szpil">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a class="social instagram" target="_blanc" href="https://www.instagram.com/szpilvv_/">
                <i class="fab fa-instagram"></i>
            </a>
            <a class="social youtube" target="_blanc" href="https://www.youtube.com/user/kuba0799">
                <i class="fab fa-youtube"></i>
            </a>
        </div>
    </div>
    </nav>
    <main>
        <section id="content" class="content">
            <section id="page" class="page">
            </section>
        </section>
    </main>
    <footer>
        <p>2019 &copy; Wszelkie prawa zastrzeżone</p>
        <div class="socials socialsBottom">
            <a class="social facebook" target="_blanc" href="https://www.facebook.com/kuba.szpil">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a class="social instagram" target="_blanc" href="https://www.instagram.com/szpilvv_/">
                <i class="fab fa-instagram"></i>
            </a>
            <a class="social youtube" target="_blanc" href="https://www.youtube.com/user/kuba0799">
                <i class="fab fa-youtube"></i>
            </a>
        </div>
    </footer>`;

}










// function obiekty() {

//     //tworzenie fixed diva z backgroundem
//     var bgFix = document.createElement("div");
//     bgFix.classList.add("bg");
//     root.appendChild(bgFix);

//     //tworzenie nawigacji
//     var navigation = document.createElement("nav");
//     navigation.classList.add("navigation");
//     root.appendChild(navigation);
//     var navHeader = document.createElement("div");
//     navHeader.classList.add("navHeader");
//     navigation.appendChild(navHeader);
//     var logo = document.createElement("a");
//     logo.classList.add("logo");
//     logo.classList.add("link");
//     logo.href = "index.html";
//     logo.innerHTML = "<span></span>guitar - second life";
//     navHeader.appendChild(logo);
//     var navBtn = document.createElement("input");
//     navBtn.classList.add("navBtn");
//     navBtn.id = "navBtn";
//     navBtn.setAttribute("type","checkbox");
//     navHeader.appendChild(navBtn);



//     var navMenu = document.createElement("nav");
//     navMenu.classList.add("navMenu");
//     navHeader.appendChild(navMenu);
//     var menuList = document.createElement("ul");
//     menuList.classList.add("menuList");
//     navMenu.appendChild(menuList);

//     for(var a=1;a<=5;a++) {
//         var menuElement = document.createElement("li");
//         menuElement.classList.add("menuElement");
//         menuList.appendChild(menuElement);
//         var link = document.createElement("a");
//         link.classList.add("link");
//         link.classList.add("menuLink");
//         switch(a) {
//             case 1:{
//                 link.textContent = "home";
//                 link.href = "index.html";
//             }break;
//             case 2:{
//                 link.textContent = "o hobby";
//                 link.href = "about.html";
//             }break;
//             case 3:{
//                 link.textContent = "sprzęt";
//                 link.href = "gear.html";
//             }break;
//             case 4:{
//                 link.textContent = "media";
//                 link.href = "media.html";
//             }break;
//             case 5:{
//                 link.textContent = "galeria";
//                 link.href = "gallery.html";
//             }break;
//         }
//         menuElement.appendChild(link);
//     }

//     var navBtnLabel = document.createElement("label");
//     navBtnLabel.classList.add("navBtnLabel");
//     navBtnLabel.setAttribute("for","navBtn");
//     navBtnLabel.innerHTML = "<span></span>";
//     navHeader.appendChild(navBtnLabel);

    

//     var main = document.createElement("main");
//     root.appendChild(main);
//     var content = document.createElement("section");
//     content.id = "content";
//     content.classList.add("content");
//     main.appendChild(content);

//     var page = document.createElement("section");
//     page.id = "page";
//     page.classList.add("page");
//     content.appendChild(page);


//     var footer = document.createElement("footer");
//     root.appendChild(footer);
//     var footerTag = document.createElement("p");
//     footerTag.innerHTML = "2019 &copy; Wszelkie prawa zastrzeżone";
//     footer.appendChild(footerTag);

//     var socialsTop = document.createElement("div");
//     socialsTop.classList.add("socials");
//     socialsTop.classList.add("socialsTop");
//     navHeader.appendChild(socialsTop);

//     var socialsBottom = document.createElement("div");
//     socialsBottom.classList.add("socials");
//     socialsBottom.classList.add("socialsBottom");
//     footer.appendChild(socialsBottom);

//     //odnosniki spolecznosciowe
//     for(var i=0;i<6;i++) {
//         var social = document.createElement("a");
//         social.classList.add("social");
//         social.setAttribute("target","_blanc");
//         switch(i) {
//             case 0: {
//                 social.classList.add("facebook");
//                 social.innerHTML = '<i class="fab fa-facebook-f"></i>';
//                 social.href = "https://www.facebook.com/kuba.szpil";
//                 socialsTop.appendChild(social);
//             }break;
//             case 1:{
//                 social.classList.add("instagram");
//                 social.innerHTML = '<i class="fab fa-instagram"></i>';
//                 social.href = "https://www.instagram.com/szpilvv_/";
//                 socialsTop.appendChild(social);
//             }break;
//             case 2:{
//                 social.classList.add("youtube");
//                 social.innerHTML = '<i class="fab fa-youtube"></i>';
//                 social.href = "https://www.youtube.com/user/kuba0799";
//                 socialsTop.appendChild(social);
//             }break;
//             case 3: {
//                 social.classList.add("facebook");
//                 social.innerHTML = '<i class="fab fa-facebook-f"></i>';
//                 social.href = "https://www.facebook.com/kuba.szpil";
//                 socialsBottom.appendChild(social);
//             }break;
//             case 4:{
//                 social.classList.add("instagram");
//                 social.innerHTML = '<i class="fab fa-instagram"></i>';
//                 social.href = "https://www.instagram.com/szpilvv_/";
//                 socialsBottom.appendChild(social);
//             }break;
//             case 5:{
//                 social.classList.add("youtube");
//                 social.innerHTML = '<i class="fab fa-youtube"></i>';
//                 social.href = "https://www.youtube.com/user/kuba0799";
//                 socialsBottom.appendChild(social);
//             }break;
//         }
//     }

// }