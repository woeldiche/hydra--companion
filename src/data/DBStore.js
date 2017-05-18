import PouchDB from 'pouchdb';
import PouchdbFind from 'pouchdb-find';
const sync = false;

PouchDB.plugin(PouchdbFind);
//PouchDB.debug.enable('*');
//PouchDB.debug.disable();

// Create new Pouch
let UserData = new PouchDB('hydraUserData');

if (sync) {
  // Define remote sync
  let RemoteUserData = 'https://pixelcollider.cloudant.com/hydra';
  let remoteSync = UserData.sync(RemoteUserData, {
    live: true,
    retry: true
  })
    .on('change', function(info) {
      console.log('change: ', info);
      // handle change
    })
    .on('paused', function(err) {
      // replication paused (e.g. replication up to date, user went offline)
      console.log('Paused: ', err);
    })
    .on('active', function() {
      // replicate resumed (e.g. new changes replicating, user went back online)
      console.log('Active: ');
    })
    .on('denied', function(err) {
      // a document failed to replicate (e.g. due to permissions)
      console.log('Denied: ', err);
    })
    .on('complete', function(info) {
      // handle complete
      console.log('Complete: ', info);
    })
    .on('error', function(err) {
      console.log('Error: ', err);
      // handle error
    });

  !sync && remoteSync.cancel();
}

// Create index and for now just log the result.
UserData.createIndex({
  index: {
    fields: ['type', 'caster']
  }
})
  .then(function(result) {})
  .catch(function(err) {
    console.log(err);
  });

// Key:llyseessioniesedsomoulde
// Password:7f09b17289b3d5f98f5c2d1079fc573777eb209f

export default UserData;
