//? Dependencies
const uuid = require("uuid");
const { faker } = require("@faker-js/faker");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const Employees = require("../../models/employees.models");

const createFinancesEmployees = () => {
  for (let i = 0; i < 50; i++) {
    Employees.create({
      id: uuid.v4(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: faker.phone.number(),
      birthday: faker.date.birthdate(),
      identificationCardType: "Cédula de ciudadanía",
      identificationCardNumber: Math.ceil(Math.random() * 100000000),
      userId: "279c8799-7cc4-47a7-956c-1c89647e6876",
      country: "Colombia",
      address: lorem.generateSentences(5),
      areaId: "38981b5f-71ab-466b-a1de-83b678242f50",
      subareaId: "018a1eae-56ab-450f-b550-86792d8e577c",
    });
  }
};

const createOperationsEmployees = () => {
  for (let i = 0; i < 50; i++) {
    Employees.create({
      id: uuid.v4(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: faker.phone.number(),
      birthday: faker.date.birthdate(),
      identificationCardType: "Cédula de ciudadanía",
      identificationCardNumber: Math.ceil(Math.random() * 100000000),
      userId: "61098c66-072d-4cd7-9557-b9a7aea7236c",
      country: "Colombia",
      address: lorem.generateSentences(5),
      areaId: "00ffab12-e2ef-4149-a73e-36a202d63274",
      subareaId: "6d9cc371-d9dd-46dc-8db0-3a42a005e1b8",
    });
  }
};

const createMarketingEmployees = () => {
  for (let i = 0; i < 50; i++) {
    Employees.create({
      id: uuid.v4(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: faker.phone.number(),
      birthday: faker.date.birthdate(),
      identificationCardType: "Cédula de ciudadanía",
      identificationCardNumber: Math.ceil(Math.random() * 100000000),
      userId: "f4c99e0f-3227-4f4f-ad6c-3bda6b942faf",
      country: "Colombia",
      address: lorem.generateSentences(5),
      areaId: "eaea3804-e9a6-4fcd-b1a5-5b7b543eed7c",
      subareaId: "75736f7f-f895-4aa0-a9c0-4748a3abde82",
    });
  }
};

const createTechnologyEmployees = () => {
  for (let i = 0; i < 50; i++) {
    Employees.create({
      id: uuid.v4(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: faker.phone.number(),
      birthday: faker.date.birthdate(),
      identificationCardType: "Cédula de ciudadanía",
      identificationCardNumber: Math.ceil(Math.random() * 100000000),
      userId: "aa923c72-98f5-4f7d-82a1-b4a067577cae",
      country: "Colombia",
      address: lorem.generateSentences(5),
      areaId: "bae586bd-0d69-482b-b13a-36a2f31de88d",
      subareaId: "1f156c19-82df-40ad-9c68-db9d5cb95f3c",
    });
  }
};

const createHREmployees = () => {
  for (let i = 0; i < 50; i++) {
    Employees.create({
      id: uuid.v4(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: faker.phone.number(),
      birthday: faker.date.birthdate(),
      identificationCardType: "Cédula de ciudadanía",
      identificationCardNumber: Math.ceil(Math.random() * 100000000),
      userId: "c8573fc0-f859-46f0-81bd-356bbd346274",
      country: "Colombia",
      address: lorem.generateSentences(5),
      areaId: "0ed44818-65a2-4bc4-a0fd-28ba1d1b8416",
      subareaId: "ba49dc8c-8be3-4cc3-8182-2351ec82ce87",
    });
  }
};

module.exports = {
  createFinancesEmployees,
  createOperationsEmployees,
  createMarketingEmployees,
  createTechnologyEmployees,
  createHREmployees,
};
