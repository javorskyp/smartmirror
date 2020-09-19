import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import * as authService from '../services/auth-service';
import { CredentialsDto } from "../interfaces/dto/credentials-dto.interface";

const firebaseConfig = {
    apiKey: "AIzaSyAfGo1jyIsq4zJJmrgZZhtnjgrgDYISEQI",
    authDomain: "base-app-87ee9.firebaseapp.com",
    databaseURL: "https://base-app-87ee9.firebaseio.com",
    projectId: "base-app-87ee9",
    storageBucket: "base-app-87ee9.appspot.com",
    messagingSenderId: "559415420219",
    appId: "1:559415420219:web:477c5b8a9bb9ee1554031e"
};

firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();

export const fetchGoogleToken = () => {
    firebase.auth().signInWithPopup(provider)
        .then((result: any) => {
            firebase.auth().currentUser?.getIdToken()
                .then(async (idToken: string) => {
                    const response = await authService.fetchBackendToken(idToken);
                    console.log(response.data.token);
                });
        })
        .catch((error) => {

        });
}

export const createUserWithEmailAndPassword = (data: CredentialsDto) => {
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((result) => {

        })
        .catch((error) => {

        });
}

export const loginUserWithEmailAndPassword = (data: CredentialsDto) => {
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then((result) => {
            firebase.auth().currentUser?.getIdToken()
                .then(async (idToken: string) => {
                    const response = await authService.fetchBackendToken(idToken);
                    console.log(response.data.token);
                });
        })
        .catch((error) => {

        });
}