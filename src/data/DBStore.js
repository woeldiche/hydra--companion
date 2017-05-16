import PouchDB from 'pouchdb';
PouchDB.debug.enable('*');

let UserData = new PouchDB('hydraUserData');

window.PouchDB = PouchDB;
export default UserData;
