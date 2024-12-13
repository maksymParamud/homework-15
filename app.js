function AboutCat (poroda, age, color, name, imgURL, isSleepping = false) {
    this.poroda = poroda;
    this.age = age;
    this.color = color;
    this.name = name;
    this.imgURL = imgURL;
    this.isSleepping = isSleepping;

    this.takeFood = function() {
        if (isSleepping) {
            console.log("hello");
            return;
        }
        console.log('hello');
    }

    this.wakeUp = function() {
        this.isSleepping = false;
    }

    this.takeANap = function() {
        this.isSleepping = true;
    }
}

let cat = [];

cat[0] = new AboutCat('British Shorthair', 2, 'orange', "Рижик", "./images/завантаження.jpg", true);
cat[1] = new AboutCat('American Shorthair', 3, 'gray', "Мурка", "./images/images.jpg", false);
cat[2] = new AboutCat('Exotic Shorthair', 4, 'black', "Фелікс", "images/10_fascinating_facts_about_black_cats-3.jpg", true);

let container = document.querySelector(".container");
let catDiv = document.querySelector(".currentCat");
let btn = document.querySelector(".btn");
let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");

btn1.addEventListener("click", function(e) {
    catDiv.innerHTML = `<img src = "${cat[0].imgURL}">
                        <li>порода: ${cat[0].poroda}</li>
                        <li>age: ${cat[0].age}</li>
                        <li>color: ${cat[0].color}</li>
                        <li>name: ${cat[0].name}</li>
                        <li>status: ${cat[0].isSleepping}</li>`;
});

btn2.addEventListener("click", function(e) {
    catDiv.innerHTML = `<img src = "${cat[1].imgURL}">
                        <li>порода: ${cat[1].poroda}</li>
                        <li>age: ${cat[1].age}</li>
                        <li>color: ${cat[1].color}</li>
                        <li>name: ${cat[1].name}</li>
                        <li>status: ${cat[1].isSleepping}</li>`;
});

btn3.addEventListener("click", function(e) {
    catDiv.innerHTML = `<img src = "${cat[2].imgURL}">
                        <li>порода: ${cat[2].poroda}</li>
                        <li>age: ${cat[2].age}</li>
                        <li>color: ${cat[2].color}</li>
                        <li>name: ${cat[2].name}</li>
                        <li>status: ${cat[2].isSleepping}</li>`;
});