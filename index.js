class Breakfast {
    constructor(food, drink) {
        this["food"] = food;
        this["drink"] = drink;
    };
};

class Lunch {
    constructor(salad, soup, drink) {
        this["salad"] = salad;
        this["soup"] = soup;
        this["drink"] = drink;
    };
};

class Dinner {
    constructor(salad, soup, entree, _desert) {
        this["salad"] = salad;
        this["soup"] = soup;
        this["entree"] = entree;
        this["_dessert"] = _desert;
    };
};

let breakfast = new Breakfast("oatmeal", "water");
let lunch = new Lunch("salad", "soup", "drink");
let dinner = new Dinner("salad", "soup", "entree", "cheesecake");
console.log(dinner)