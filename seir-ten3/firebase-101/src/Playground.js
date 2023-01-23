import React, { Component } from 'react';
import database from './firebase/firebase';

class Playground extends Component {
    componentDidMount(){

    const users = [
      {id: 1, name: 'Ada Lovelace'},
      {id: 2, name: 'Michelle Obama'},
      {id: 3, name: 'Shaun T'},
      {id: 4, name: 'Isaac Asimov'}
    ]



      // Read data, .on .once\

      // subscribing to the users collection
      database.ref('users').on('value', (snapshot) => {
        // value is an event that triggers when something changes
        // snapshot is the data from firebase in its current state
        console.log(snapshot, 'snapshot')
        const updatedUsers = []; // this could some array in state

        // snapshot is a firebase object, forEach is a firebase method
        snapshot.forEach((childSnapShot) => {
          updatedUsers.push({
            id: childSnapShot.key, // is the unique identifier,
            ...childSnapShot.val() // .val() will get the keys and
            // values for the object
          })
        });

          console.log(updatedUsers);

      });


      const singleUser = database.ref('users/-LnTKbWaUw7PXd6Smwyd')

      singleUser.once('value')
        .then((snapshot) => {
          console.log(snapshot.val(), snapshot, snapshot.key)
        }).catch((err) => {
          console.log(err)
        })


      // database.ref('users').set(users).then(() => {
      //   console.log('data written successfully')
      // }).catch((err) => {
      //   console.log('Firebase error', err)
      // })
      // push will add without deleting
      // this is not array, its firebase method push
      // database.ref('users').push({
      //   name: 'Burt',
      //   username: 'hackerman',
      //   email: 'smokey@gmail.com'
      // })

      // const user = database.ref('users').push({
      //   name: 'barry',
      //   email: 'barry@barry.com'
      // }, () => {
      //   console.log('Data written successfully', user.key)
      // })


      // we need to create a reference to what we want to update
      const userToUpdateRef = database.ref('users/-LnTKmoaINO5E11gqcTh');

      userToUpdateRef.update({
        email: 'THISISUPDATEd@gmail.com'
      }).then(() => {
        console.log('data updated successfully')
      }).catch((err) => {
        console.log("FIREBASE error", err)
      })

      // deleting
      // const userRef = database.ref('users/-LnTK55DNvGWdHv1xL86')

      // userRef.remove()
      //   .then(() => {
      //     console.log('user deleted')
      //   }).catch((err) => {
      //     console.log(err, ' firebase error')
      //   })


    }
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h3>Firebase Playground</h3>
                <p>Open your Dev Tools and Play with Firebase! <span role="img" aria-label="firebase-fun">🔥🖖🏼✨</span></p>
            </div>
        );
    }
}

export default Playground;
