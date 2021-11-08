//import dependencies/nodemon
const { request, response } = require('express');
const express = require('express');
const faker = require('faker');
const app = express();
const port = 8000;

// middleware / configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const makeNewUserObj = () => ({
    userId: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

const makeNewCompanyObj = () => ({
    compId: faker.datatype.uuid(),
    compName: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    }
});

// C - CREATE: we use POST

// C - READ: we use GET
app.get("/api/users/new", (request, response)=>{
    // console.log(request); // very long
    const newUser = makeNewUserObj();
    response.json(newUser);
    // U must respond! Won't work without!
});

// C - UPDATE: we use PUT
// C - DESTROY: we use DELETE

// our calls to the Faker API which we imported up top!
app.get("/api/companies/new", (request, response)=>{
    const newCompany = makeNewCompanyObj();
    response.json(newCompany);
});



app.get("/api/user/company", (request, response) => {
    const newUser = makeNewUserObj();
    const newCompany = makeNewCompanyObj();
    const combinedObj = {
        user: newUser,
        company: newCompany,
    };
    response.json(combinedObj);
});

// listen on 8000
app.listen(8000, ()=>console.log("Successfully connected to Port 8000"));