export class User {
    public firstName: string;
    public lastName: string;
    public email: string;
    public username: string;
    public password: string;
    public phoneNumber: string;
    public cpf: string;
    public admin: boolean;
    public team: boolean;

    constructor(firstName: string, lastName: string, email: string, username: string, password: string, phoneNumber: string, cpf: string, admin: boolean = false, team: boolean = false) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.cpf = cpf;
        this.admin = admin;
        this.team = team;
    }
}