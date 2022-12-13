import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public auth:AngularFireAuth,public database:AngularFirestore) { }


  login(email:string,password:string){
    console.log(this.auth.signInWithEmailAndPassword(email,password));
    return this.auth.signInWithEmailAndPassword(email,password);
  }
  logout(){
   return this.auth.signOut();
  }
  registrar(email:string,password:string){
    this.auth.createUserWithEmailAndPassword(email,password).catch(error=>{
      return 'error';
    });
    return this.auth.createUserWithEmailAndPassword(email,password);
  }
  async getUid(){
    const user= await this.auth.currentUser;
    if(user === null){
      return null;
    }else{
      return user.uid;
    }
  }
  getUidState(){
    this.auth.authState.subscribe(res=>{
      console.log(res.uid);
    });
  }
  stateAuth(){
    return this.auth.authState;
  }
  createDoc(data:any,path:string,id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).set(data);

  }
  getDoc<tipo>(path:string,id:string){
    const collection = this.database.collection(path);
    return collection.doc<tipo>(id).valueChanges();
  }
  deleteDoc(path:string,id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).delete();
  }
  updateDoc(data:string,path:string,id:string){
    const collection = this.database.collection(path);
    return collection.doc(id).update(data);
  }
  getId(){
    return this.database.createId();
  }


}
