const { faker } = require('@faker-js/faker');


console.log("HHHHHHH");
class ExtractInfo{
    constructor(){
        // this.id = faker._id.findId();
        this.id = faker.datatype.number();
        this.name = faker.name.firstName();
        this.name = faker.name.lastName();

        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email(); 
        this.password = faker.internet.password();



    }
    
}
module.exports = ExtractInfo

