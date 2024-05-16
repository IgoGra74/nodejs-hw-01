import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const existingContacts = JSON.parse(await fs.readFile(PATH_DB));
    const newContacts = [];

    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = existingContacts
      ? existingContacts.concat(newContacts)
      : newContacts;

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.error(`Error writing data to file ${PATH_DB}:`, error);
  }
};

await generateContacts(3);
