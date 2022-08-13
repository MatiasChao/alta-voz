import Dexie, { Table } from 'dexie';

export interface User {
  userId?: string;
  limitShowArticles: number;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  users!: Table<User>; 

  constructor() {
    super('altaVozDb');
    this.version(1).stores({
      users: 'userId, limitShowArticles' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();