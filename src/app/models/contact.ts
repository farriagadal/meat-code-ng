export class Contact {

    public firstname: string;
    public lastname: string;
    public phone: string;
    public email: string;

    constructor(data: any = null) {
        if (data) {
            this.firstname = data.firstname;
            this.lastname = data.lastname;
            this.phone = data.phone;
            this.email = data.email;
        }
    }

    public toJSON(): any {
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            phone: this.phone,
            email: this.email
        }
    }
}
