export class Collection {
    public id: number;
    public code: string;
    public title: string;
    public acronym: string;
    public description: string;
    public addInfo: string;
    public order: number;

    constructor(id: number, code: string, title: string, acronym: string, description: string, addInfo: string, order: number) {
        this.id = id;
        this.code = code;
        this.title = title;
        this.acronym = acronym;
        this.description = description;
        this.addInfo = addInfo;
        this.order = order;
    }
}