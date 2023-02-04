const db = require('../util/database');

module.exports = class user {
    // constructing our user object
    constructor(name,email,password) {

        this.name = name;
        this.email = email;
        this.password = password
    
    }

    static find(email){
        return db.execute(
            'SELECT * FROM users WHERE email = ?', [email]
        )
    }

    // static method to save user to our database
    // a static method is similar to a companion object in kotlin, it give access to methods and properties without instanciating the class 
    static save(user){
        return db.execute(
            // the ? are used to avoid sql injection attacks, it make sure that the values are red as strings and not sql queries
            'INSERT INTO users (name,email,password) VALUES (?,?,?)' , [user.name,user.email,user.password]
        )
    }

    }