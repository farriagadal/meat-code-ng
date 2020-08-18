export class Article {

    public id: number;
    public image: string;
    public title: string;
    public url: string;
    public createdAt: string;
    public content: string;
    public category: string;

    constructor(data: any = null) {
        if (data) {
            this.id = data.id;
            this.image = data.image;
            this.title = data.title;
            this.url = data.url;
            this.createdAt = data.createdAt;
            this.content = data.content;
            this.category = data.category;
        }
    }

}