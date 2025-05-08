function formatString(input: string, toUpper?: boolean): string {
    let result: string;
    if (typeof input === "string" && toUpper === false) {
        result = input.toLocaleLowerCase()
    } else {
        result = input.toUpperCase()
    }
    console.log(result);
    return result;
}



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const result = items.filter(element => element.rating >= 4)
    console.log(result);
    return result;
}

const books = [
    { title: "Book A", rating: 1.5 },
    { title: "Book B", rating: 4.2 },
    { title: "Book C", rating: 5.0 }
];




function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result: T[] = [];
    for (let childArray of arrays) {
        for (let arrayItem of childArray) {
            result.push(arrayItem)
        }
    }
    console.log(result);
    return result
}





class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year
    }

    getInfo() {
        console.log(`"Make: ${this.make}, Year: ${this.year}"`);
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    getModel() {
        console.log(`Model: ${this.model}`)
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");

  



function processValue(value: string | number): number {
    let result: number = 0;

    if (typeof value === 'number') {
        result = value * 2;

    } else if (typeof value === 'string') {
        result = value.length
    } else {

    }
    console.log(result);

    return result;
}





interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {

    if (products.length === 0) {
        console.log(null);
        return null;
    }
    else {
        const result = products.reduce((previous, current) =>
            current.price > previous.price ? current : previous
        )
        console.log(result);
        return result
    }
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 245 },
    { name: "Bag", price: 50 }
];





enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    let today: string;

    if (day === Day.Saturday || day === Day.Sunday) {
        today = "Weekend";
    } else {
        today = "Weekday";
    }
    console.log(today);
    return today;
}





async function squareAsync(n: number): Promise<number>{
    return new Promise<number>((resolve, reject)=> {
        setTimeout(() => {
            if(n>=0){
                resolve(n*n)
            }else{
                reject(new Error('Negative number not allowed'))
            }
        }, 1000);
    })
}
