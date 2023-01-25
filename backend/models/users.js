import db from '../util/database';

module.exports = class user {
    constructor(private name:string, private email:string,private password:string) {

        this.name = name;
        this.email = email;
        this.password = password;
        

    }

    
}