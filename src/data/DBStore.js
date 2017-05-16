import PouchDB from 'pouchdb';
//PouchDB.debug.enable('*');
//PouchDB.debug.disable();
//window.PouchDB = PouchDB;

let UserData = new PouchDB('hydraUserData');

// UserData.allDocs()
//   .then(function(result) {
//     console.log(result);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

export default UserData;
