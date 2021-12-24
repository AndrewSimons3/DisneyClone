import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCm8lpZc8JaQFnAhRzYBqcnKo2tYLUsRgE',
	authDomain: 'disneyplus-clone-bc172.firebaseapp.com',
	projectId: 'disneyplus-clone-bc172',
	storageBucket: 'disneyplus-clone-bc172.appspot.com',
	messagingSenderId: '104487042695',
	appId: '1:104487042695:web:ca77ff0c25e71637988222',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
