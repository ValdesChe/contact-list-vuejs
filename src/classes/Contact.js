export default class Contact {

    constructor() {
        this.name = ""
        this.surname = ""
        this.phone = ""
        this.city = ""
        this.website = ""

    }


    SetName(name) {
        this.name = name
    }

    SetSurname(surname) {
        this.surname = surname
    }

    verify() {
        let errors = [];

        this.name.length < 10 || this.surname < 10 ? errors.push(" Taille") : ""

        return errors;
    }
}