import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import * as authService from '../services/auth-service';
import { CredentialsDto } from '../interfaces/dto/credentials-dto.interface';
import { AccessTokenDto } from '../interfaces/dto/access-token-dto.interface';
import { TokenRo } from '../interfaces/ro/token-ro.interface';
import { AxiosResponse } from 'axios';

const firebaseConfig = {
    apiKey: 'AIzaSyAfGo1jyIsq4zJJmrgZZhtnjgrgDYISEQI',
    authDomain: 'base-app-87ee9.firebaseapp.com',
    databaseURL: 'https://base-app-87ee9.firebaseio.com',
    projectId: 'base-app-87ee9',
    storageBucket: 'base-app-87ee9.appspot.com',
    messagingSenderId: '559415420219',
    appId: '1:559415420219:web:477c5b8a9bb9ee1554031e',
};

firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

export const fetchGoogleToken = async () => {
    await firebase.auth().signInWithPopup(provider);
    const idToken = await firebase.auth().currentUser?.getIdToken();
    if (idToken) {
        await authService.fetchBackendToken(idToken);
    }
};

export const createUserWithEmailAndPassword = (data: CredentialsDto) => {
    return firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
};

export const loginUserWithEmailAndPassword = async (data: CredentialsDto): Promise<TokenRo> => {
    await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
    const idToken = await firebase.auth().currentUser?.getIdToken();
    if (!idToken) {
        throw Error('Nie ma tokenu - TODO');
    }
    return (await authService.fetchBackendToken(idToken)).data;
};
