//right-block

let buttonDocument = document.getElementById('documents-button');
let buttonCar = document.getElementById('yourCar-button');
let dropdownDocument =  document.getElementById('dropdownDocument');
let dropdownCar =  document.getElementById('dropdownCar');
let documentsTop = document.querySelector('.documents__top');
let yourCarTop = document.querySelector('.yourCar__top');

documentsTop.onclick = function() {
    dropdownDocument.classList.toggle('documents__dropdown_active');
    buttonDocument.classList.toggle('documents-button_active');
    blockDocuments.classList.toggle('documents_active');
}

yourCarTop.onclick = function() {
    dropdownCar.classList.toggle('yourCar__dropdown_active');
    buttonCar.classList.toggle('documents-button_active');
    blockCar.classList.toggle('documents_active');
}