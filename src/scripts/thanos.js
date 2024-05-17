import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB));
    const updatedContacts = contacts.filter(() => Math.random() >= 0.5);
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.error(`Error writing data to file ${PATH_DB}:`, error);
  }
};

await thanos();
