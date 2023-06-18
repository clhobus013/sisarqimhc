export class Document {
    public id: number;
    public code: string;
    public title: string;
    public description: string;
    public iniDate: Date;
    public finDate: Date;
    public addInfo: string;
    public gender: string;
    public acronym: string;
    public permission: number;
    public active: boolean;

    constructor(id: number, code: string, title: string, acronym: string, description: string, iniDate: Date, finDate: Date, addInfo: string, gender: string, permission: number, active: boolean) {
        this.id = id;
        this.code = code;
        this.title = title;
        this.acronym = acronym;
        this.description = description;
        this.iniDate = iniDate;
        this.finDate = finDate;
        this.addInfo = addInfo;
        this.gender = gender;
        this.permission = permission;
        this.active = active;
    }

}