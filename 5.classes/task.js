// Базовый класс печатных изданий
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    get state() {
        return this._state;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    fix() {
        if (this._state > 0 && this._state < 100) {
            this._state *= 1.5;
            if (this._state > 100) {
                this._state = 100;
            }
        }
    }
}

// Класс для журналов
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

// Базовый класс книг
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

// Класс для романов
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

// Класс для фантастических книг
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

// Класс для детективов
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Пример использования
const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);
console.log(sherlock.releaseDate); // 2019
console.log(sherlock.state); // 100
sherlock.fix();
console.log(sherlock.state); // 100

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);
console.log(picknick.author); // "Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); // 10
picknick.fix();
console.log(picknick.state); // 15

// Класс библиотеки
class Library {
    constructor(name) {
    this.name = name;
    this.books = [];
    }
   
    addBook(book) {
    if (book.state > 30) {
    this.books.push(book);
    }
    }
   
    findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
    }
   
    giveBookByName(bookName) {
    const book = this.books.find(book => book.name === bookName);
    if (book) {
    const index = this.books.indexOf(book);
    this.books.splice(index, 1);
    return book;
    }
    return null;
    }
   }
   
   // Тестовый сценарий
   const library = new Library("Городская библиотека");
   
   // Добавляем несколько изданий
   library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе",
      2019,
      1008
    )
   );
   
   library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
   );
   
   library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
   library.addBook(new Magazine("Мурзилка", 1924, 60));
   
   // Проверяем поиск
   console.log(library.findBookBy("name", "Властелин колец")); // null
   console.log(library.findBookBy("releaseDate", 1924).name); // "Мурзилка"
   
   // Проверяем выдачу
   console.log("Количество книг до выдачи: " + library.books.length); // 4
   const issuedBook = library.giveBookByName("Машина времени");
   console.log("Количество книг после выдачи: " + library.books.length); // 3
   
   // Повреждаем книгу
   issuedBook.state = 20;
   console.log("Состояние поврежденной книги: " + issuedBook.state); // 20
   
   // Восстанавливаем книгу
   issuedBook.fix();
   console.log("Состояние восстановленной книги: " + issuedBook.state); // 30
   
   // Пытаемся вернуть книгу
   library.addBook(issuedBook);
   console.log("Количество книг после попытки возврата: " + library.books.length); // 3 (книга не добавлена, так как state <= 30)
   
   // Создаем книгу 1919 года
   const book1919 = new Book(
    "Александр Блок",
    "Двенадцать",
    1919,
    48
   );
   library.addBook(book1919);
   console.log("Количество книг");
