export class User {
    name = '';
    lasName = '';
    email = ''; 
    state = false;

    constructor(name, lastName, email, state){
        this.name = name;
        this.lastName = lastName;   
        this.email = email;         
        this.state = state;
    }

}