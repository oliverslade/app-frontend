import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
 
 
@Injectable()
export class AuthService {

  private user: firebase.User;

  constructor(
    public afAuth: AngularFireAuth) {
      afAuth.authState.subscribe(user => {
        this.user = user;
      });
  }
 
  // public login(credentials) {
  //   if (credentials.email === null || credentials.password === null) {
  //     return Observable.throw("Please insert credentials");
  //   } else {
  //     return Observable.create(observer => {
  //       // At this point make a request to your backend to make a real check!
  //       let access = (credentials.password === "pass" && credentials.email === "email");
  //       this.currentUser = new User('Rob', 'rob@gmail.com');
  //       observer.next(access);
  //       observer.complete();
  //     });
  //   }
  // }
 
  signInWithEmail(credentials) {
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
  }

  signUp(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  authenticated(): boolean {
    return this.user !== null;
  }
 
  getEmail() {
    return this.user && this.user.email;
  }
 
  // signInWithGoogle() {
	// 	console.log('Sign in with google');
	// 	return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
  // }

  // private oauthSignIn(provider: AuthProvider) {
  //   if (!(<any>window).cordova) {
  //     return this.afAuth.auth.signInWithPopup(provider)
  //       .then((result) => {
  //         let token = result.credential.accessToken;
  //         this.user = result.user;
  //         console.log('Google signin: ', token, this.user);
  //       }).catch(function(error) {
  //         // Handle Errors here.
  //         alert(error.message);
  //       });
  //   } else {
  //     return this.afAuth.auth.signInWithRedirect(provider)
  //     .then(() => {
  //       return this.afAuth.auth.getRedirectResult().then( result => {
  //         // This gives you a Google Access Token.
  //         // You can use it to access the Google API.
  //         let token = result.credential.accessToken;
  //         // The signed-in user info.
  //         let user = result.user;
  //         console.log(token, user);
  //       }).catch(function(error) {
  //         // Handle Errors here.
  //         alert(error.message);
  //       });
  //     });
  //   }
  // }

 
}