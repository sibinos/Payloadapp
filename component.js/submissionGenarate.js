import { faker } from '@faker-js/faker'
export function generateContactFormSubmission(parentFormId) {
    return {
      form: parentFormId,
      submissionData: [
        {
          field: "first",
          value: faker.name.firstName(),
        },
        {
          field: "last",
          value: faker.name.lastName(),
        },
        {
          field: "email",
          value: faker.internet.email(),
        },
        {
          field: "message",
          value: faker.lorem.sentences(3),
        }
      ],
      createdAt: "2022-02-02T01:32:16.058Z",
      updatedAt: "2022-02-02T01:32:16.058Z",
    }
  }