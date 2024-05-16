import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const newContact = createFakeContact();
    const existingContacts = JSON.parse(await fs.readFile(PATH_DB));
    existingContacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(existingContacts, null, 2));
  } catch (error) {
    console.error(`Error writing data to file ${PATH_DB}:`, error);
  }
};

await addOneContact();
