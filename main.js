//1
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.

class MyComputer {
    constructor(ram, power, name,) {
        this.ram = ram;
        this.power = power;
        this.name = name;
    }
    welcom (){
        console.log('Включити ПК можна кнопкою на системному блоці ')
    }


}

let computer = new MyComputer(256, 800, 'imac',)


console.log(computer)
computer.welcom()

//Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
//
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)


class Noutbook extends MyComputer {
    constructor(ram, power, name, monitor) {
        super(ram, power, name);
        this.monitor = monitor
        this.work = ram * monitor
    }
}

let noutbook = new Noutbook(256, 600, 'macbook', 13,)

console.log(noutbook)


//Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.


class UltraBook extends Noutbook {
    constructor(ram, power, name, monitor, mass) {
        super(ram, power, name, monitor);
        this.mass = mass

    }
    welcom1 (){
        if(ultraBook.mass > 2){
            console.log('батарея буде тримати менше ніж 4 години')
        }
    }
}

let ultraBook = new UltraBook(128, 400, 'lenovo', 11, 2.4)

console.log(ultraBook)
ultraBook.welcom1()

//Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

class BasicPc extends MyComputer{
    constructor(ram, power, name, fps) {
        super(ram, power, name,);
         this.fps = this.power / this.ram
    }
    games(){

        console.log(`You are playing RDR2 with ${this.fps} FSP`)
    }


}
let basic1 = new BasicPc(128 , 1000 , 'samsung',)
console.log(basic1)
basic1.games()


//Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

class  BasicPc2 extends MyComputer{
    constructor(ram, power, name,) {
        super(ram, power, name,);
    }
    newRam(){
        this.ram *= 2;
        console.log(`збільшуєм потужність оперативки до ${this.ram} gb`)
    }
    newPower(){
        this.power += 100;
            console.log(`збільшуєм потужність процесора на 10% до ${this.power} `)
    }

}
let basic2 = new BasicPc2(128 , 1000 , 'samsung')
console.log(basic2)
basic2.newRam()
basic2.newPower()

//Від базового ПК необхідно зробити ігнорий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
// що на цьому відрі ігри не запускаються.


class gamePc extends BasicPc {
    constructor(ram, power, name, fps) {
        super(ram, power, name,);
        this.fps = 2 * (this.power / this.ram)
    }
}

let gamePc1 = new gamePc( 128 , 1000 , 'mac')
console.log(gamePc1)





//2

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


/*function car(model, manufacturer, year, maxSped, motorOb) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSped = maxSped;
    this.motorOb = motorOb;

    this.drive = function drive(maxSped) {
        this.maxSped -= 120;
        console.log(`їдемо зі швидкістю ${this.maxSped} на годину`)
    }

    this.info = function info() {
        console.log(` WV ${this.model} в ідеальному стані, поломок не виявлено `)
    }

   this.increaseMaxSpeed = function  increaseMaxSpeed(newSpeed) {
        newSpeed = this.maxSped += 40;
        console.log(`Збільшуєм щвтдкість до ${newSpeed}`)

    }

   this.changeYear = function  changeYear (newValue){
        newValue = this.year += 5
        console.log(newValue)
    }

    this.driver = function addDriver (driver) {
        driver = {name: 'Volodymur Zavaliak', age: 24}
        console.log(driver)
    }
}

let newCar = new car('AUDI Q3','Germany',2015, 240, 2.5,)
console.log(newCar)
newCar.drive()
newCar.info()
newCar.increaseMaxSpeed()
newCar.changeYear()
newCar.driver()*/



//3

//- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


/*
class NewCar {
    constructor(model, manufacturer, year, maxSped, motorOb) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSped = maxSped;
        this.motorOb = motorOb;
    }

    drive(maxSped) {
        this.maxSped -= 120;
        console.log(`їдемо зі швидкістю ${this.maxSped} на годину`)
    }

    info() {
        console.log(` WV ${this.model} в ідеальному стані, поломок не виявлено `)
    }

    increaseMaxSpeed(newSpeed) {
        newSpeed = this.maxSped += 40;
        console.log(`Збільшуєм щвтдкість до ${newSpeed}`)

    }

    changeYear (newValue){
         newValue = this.year += 5
        console.log(newValue)
    }

    addDriver (driver) {

        driver = {name: 'Volodymur Zavaliak', age: 24}
        console.log(driver)
    }
}

let WV = new NewCar('Jetta','Germany',2015, 220, 1.8, )
console.log(WV)
WV.drive()
WV.info()
WV.increaseMaxSpeed()
WV.changeYear()
WV.addDriver()
*/




//4

//-створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


/*
class Princes  {
   constructor(name , age , size) {

        this.name = name;
        this.age = age;
        this.size = size;


   }
}

let Princes1 = [
    new Princes('dasha', 21, 31),
    new Princes('nastia', 22, 32),
    new Princes('masha', 23, 33),
    new Princes('olia', 24, 34),
    new Princes('oksana', 25, 35),
    new Princes('ira', 26, 36),
    new Princes('dana', 27, 37),
    new Princes('olena', 28, 38),
    new Princes('valia', 29, 39),
    new Princes('galia', 30, 40)
]


class King {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let King1 = new King('artur', 28, 35)

console.log(King1)

for (let i = 0; i < Princes1.length; i++) {
    if (Princes1[i].size === King1.shoeSize) {
        console.log(Princes1[i])
    }
}
*/




//5

//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


function Popelyshka(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;

}

let Popelyshka1 = [
    new Popelyshka('dasha', 21, 31),
    new Popelyshka('nastia', 22, 32),
    new Popelyshka('masha', 23, 33),
    new Popelyshka('olia', 24, 34),
    new Popelyshka('oksana', 25, 35),
    new Popelyshka('ira', 26, 36),
    new Popelyshka('dana', 27, 37),
    new Popelyshka('olena', 28, 38),
    new Popelyshka('valia', 29, 39),
    new Popelyshka('galia', 30, 40)
]


console.log(Popelyshka1)

function King(name, age, size) {

    this.name = name;
    this.age = age;
    this.size = size;

    this.searchP = function search() {
        for (let i = 0; i < Popelyshka1.length; i++) {
            if (Popelyshka1[i].size === 34) {
                console.log(Popelyshka1[i])
            }


        }
    }

}

let KingA = new King('artur', 30, 34)

console.log(KingA)
KingA.searchP()
