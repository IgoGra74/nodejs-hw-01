import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  let existingContacts;
  try {
    existingContacts = JSON.parse(await fs.readFile(PATH_DB));
  } catch (error) {
    console.error(
      `An error occurred while reading data from the file ${PATH_DB}:`,
      error,
    );
    return;
  }

  const newContacts = [];

  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }

  const updatedContacts = existingContacts
    ? existingContacts.concat(newContacts)
    : newContacts;

  await writeDataToFileAsync(PATH_DB, updatedContacts);
};

const writeDataToFileAsync = async (filePath, data) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    console.log(`The data was successfully written to the file ${filePath}`);
  } catch (error) {
    console.error(`Error writing data to file ${filePath}:`, error);
  }
};

await generateContacts(1);
