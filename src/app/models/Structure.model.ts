import { Collection } from "./Collection.model";

export class Structure {
    public id: number;
    public code: string;
    public title: string;
    public acronym: string;
    public description: string;
    public addInfo: string;
    public level: number;
    public collection: Collection;
    public supStructure?: Structure;

    constructor(id: number, code: string, title: string, acronym: string, description: string, addInfo: string, level: number, collection: Collection) {
        this.id = id;
        this.code = code;
        this.title = title;
        this.acronym = acronym;
        this.description = description;
        this.addInfo = addInfo;
        this.level = level;
        this.collection = collection;
    }

    public setCollection(collection: Collection) {
        this.collection = collection
    }

}