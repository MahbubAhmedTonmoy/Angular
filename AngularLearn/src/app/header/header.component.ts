import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit,OnDestroy {

  isAuthenticated = false;
  private usersub:Subscription;

  constructor(private dataStore: DataStorageService,
    private authServie: AuthService){}
  ngOnDestroy(): void {
    this.usersub.unsubscribe();
  }

  ngOnInit(): void {
    this.usersub = this.authServie.user.subscribe(response=>{
      this.isAuthenticated = !!response;
    })
  }
  onSaveData(){
    this.dataStore.storeRecipes();
  }
  onFetchData(){
    this.dataStore.fetchRecipes()
      .subscribe();
  }
  onLogout() {
    this.authServie.logout();
  }
}
