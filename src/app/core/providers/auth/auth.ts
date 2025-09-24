import { Injectable } from '@angular/core';
import { Auth as AuthFirebase, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(
    private readonly afb: AuthFirebase,
  ) {
    // Monitor auth state changes
    onAuthStateChanged(this.afb, (user) => {
      this.currentUserSubject.next(user);
    });
  }

  async register(correo: string, password: string): Promise<string> {
    try {
      const resp = await createUserWithEmailAndPassword(
        this.afb,
        correo,
        password,
      );
      return resp.user.uid;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }

  async logIn(correo: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(
        this.afb,
        correo,
        password,
      );
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async logOut(): Promise<void> {
    try {
      await signOut(this.afb);
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  }

  getCurrentUser(): User | null {
    return this.afb.currentUser;
  }

  isAuthenticated(): boolean {
    return !!this.afb.currentUser;
  }
  
}