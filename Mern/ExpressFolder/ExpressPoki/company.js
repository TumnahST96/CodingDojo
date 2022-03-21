const { faker } = require('@faker-js/faker');
class company {
    constructor () {
        this.id = faker.datatype.number();
        this.comp = faker.company.companyName();
        this.address = {
            street : faker.address.streetName(),
            city : faker.address.city(),
            state : faker.address.state(),
            
            zipCode : faker.address.zipCode(),
            county : faker.address.county()
        }

    }
}

module.exports = company
