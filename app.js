function AboutCat (poroda, age, color, name, imgURL, isSleepping = false) {
    this.poroda = poroda;
    this.age = age;
    this.color = color;
    this.name = name;
    this.imgURL = "";
    this.isSleepping = isSleepping;

    this.takeFood = function() {
        if(this.isSleepping) {
            console.log('cat is sleepping...');
            return;
        }
        console.log(`${name} is eating now`);
    }
}

let cat = [];

cat[0] = new AboutCat('British Shorthair', 2, orange, "Рижик", "./images/завантаження.jpg", true);
cat[1] = new AboutCat('American Shorthair', 3, gray, "Мурка", "./images/images.jpg", false);
cat[2] = new AboutCat('Exotic Shorthair', 4, black, "Фелікс", "images/10_fascinating_facts_about_black_cats-3.jpg", true);

let container = document.querySelector(".container");
let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");

btn1.addEventListener("click", function(e) {
    container.innerHTML = `<li>hello</li>`;
});