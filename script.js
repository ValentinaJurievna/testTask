//header

let auctionSubnav = document.querySelector('#auction-subnav');
let transitSubnav = document.querySelector('#transit-subnav');
let goodsSubnav = document.querySelector('#goods-subnav');
let langSubnav = document.querySelector('#lang-subnav');
let accountSubnav = document.querySelector('#account-subnav');
let transportSubnav = document.querySelector('#transport-subnav');
let notificationSubnav = document.querySelector('#notification-subnav');

let auction = document.getElementById('auction');
let transit = document.getElementById('transit');
let goods = document.getElementById('goods');
let lang = document.getElementById('lang');
let account = document.getElementById('account');
let transport = document.getElementById('transport');
let notification = document.getElementById('notification');

let buttonAuction = document.getElementById('auction-button');
let buttonTransit = document.getElementById('transit-button');
let buttonGoods = document.getElementById('goods-button');
let buttonLang = document.getElementById('lang-button');
let buttonAccount = document.getElementById('account-button');
let buttonTransport = document.getElementById('transport-button');
let notificationIcon = document.getElementById('notification-icon');




auction.onclick = function() {
    buttonAuction.classList.toggle('documents-button_active');
    auctionSubnav.classList.toggle('subnav_active');
}

transit.onclick = function() {
    buttonTransit.classList.toggle('documents-button_active');
    transitSubnav.classList.toggle('subnav_active');
}

goods.onclick = function() {
    buttonGoods.classList.toggle('documents-button_active');
    goodsSubnav.classList.toggle('subnav_active');
}

lang.onclick = function() {
    buttonLang.classList.toggle('documents-button_active');
    langSubnav.classList.toggle('subnav_active');
}

account.onclick = function() {
    buttonAccount.classList.toggle('documents-button_active');
    accountSubnav.classList.toggle('subnav_active');
}
    
transport.onclick = function() {
    buttonTransport.classList.toggle('documents-button_active');
    transportSubnav.classList.toggle('subnav_active');
}

notification.onclick = function() {
    notificationSubnav.classList.toggle('subnav_active');
    notificationIcon.style.display = 'none';
}

let searchButton = document.getElementById('search-button');
let searchBlock = document.getElementById('searchBlock');
let news = document.getElementById('news');
let about = document.getElementById('about');
searchButton.onclick = function() {
    searchBlock.classList.toggle('search_active');
    news.classList.toggle('display');
    about.classList.toggle('display');
    auction.classList.toggle('display');
    transit.classList.toggle('display');
    goods.classList.toggle('display');
    auction.classList.toggle('display');
    buttonAuction.classList.toggle('display');
    buttonTransit.classList.toggle('display');
    buttonGoods.classList.toggle('display');
    searchButton.style.marginLeft = '75px';
}




