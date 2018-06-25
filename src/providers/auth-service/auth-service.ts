import { Injectable } from '@angular/core';
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
 
  signInWithGoogle(): Promise<any> {
		console.log('Sign in with google');
		return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
  }

  private oauthSignIn(provider: AuthProvider) {

      return this.afAuth.auth.signInWithRedirect(provider)
      .then(() => {
        return this.afAuth.auth.getRedirectResult().then( result => {
          // This gives you a Google Access Token.
          // You can use it to access the Google API.
          let creds = result.credential;
          // The signed-in user info.
          let user = result.user;
          console.log('Creds : user', creds, user);
        }).catch(function(error) {
          // Handle Errors here.
          alert(error.message);
        });
      });
  }

 
}