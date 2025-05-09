export class Article {
    constructor({id = 0, title = '', operationType = '', date= ''}) {
        this.id = id;
        this.title = title;
        this.operation = operationType;
        this.date = date;
    }
}