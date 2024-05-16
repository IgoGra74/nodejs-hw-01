import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const existingContacts = JSON.parse(await fs.readFile(PATH_DB));
    return existingContacts.length;
  } catch (error) {
    console.error(`Error reading data from file ${PATH_DB}:`, error);
  }
};

console.log(await countContacts());
