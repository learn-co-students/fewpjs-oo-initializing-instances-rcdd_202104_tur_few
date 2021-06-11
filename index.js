class Breakfast{
    constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

 class Lunch{
    constructor(salad, soup, drink) {
    this.salad = salad;
    this.drink = drink;
    this.soup = soup;
    
  }
}
 
 class Dinner{
      constructor(salad, soup, entree, _dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = _dessert;
  }
}
 
 const bfast = new Breakfast('eggs', 'juice')
 const  newlunch = new Lunch('side salad', 'broccoli cheddar soup', 'iced tea')
 const newdinner = new Dinner('balsamic salad', 'consomme', 'filet mignon', 'cheesecake')
 