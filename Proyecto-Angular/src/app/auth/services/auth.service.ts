import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { first, map } from 'rxjs/operators';
import {User} from '@firebase/auth-types';
import firebase from 'firebase/app';


@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async login(email: string, password: string) {
    const result = await this.afAuth.signInWithEmailAndPassword(
      email,
      password
    );
    return result;
  }
  async register(email: string, password: string){
    const result = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    return result;
  }
  async logout(){
    try{
      await this.afAuth.signOut();
    }
    catch(error){console.log(error);
    }
  }
}