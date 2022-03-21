const { faker } = require('@faker-js/faker');

class ExtractInfo{
    constructor(){
        // this.id = faker._id.findId();
        this.name = faker.name.findName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email(); 
        this.password = faker.internet.password();



    }
    
}

User class
_id
password
Company class
_id
name
address
street
city
state
zipCode
country