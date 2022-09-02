import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
    },
  });

export const putDb = async (content) => {
  console.error('putDb not implemented');

  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.add({ content })
  const result = await request;

  console.log('data saved to database', result);
};

export const getDb = async () => {
  console.log('Getting data from database');

  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;

  console.log('results', result);
};

initdb();
