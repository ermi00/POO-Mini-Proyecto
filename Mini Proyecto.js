class Book {
    constructor(tittle, author, price, stock, id,){
        this.tittle = tittle
        this.author = author
        this.price = price
        this.stock = stock
        this.id = id

        // console.log("El contructor");
    }

    getInfo(){
        let info = `Titulo: ${this.tittle}, Autor: ${this.author}, Precio: ${this.price}, Stock: ${this.stock}, ID: ${this.id}`
        console.log(info);
    }
}

let Book1 = new Book("Superman Legacy", "James Gunn", 150, 900, 1);

// console.log(Book1.tittle);

console.log(Book1.getInfo());