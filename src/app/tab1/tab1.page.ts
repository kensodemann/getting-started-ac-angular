import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  authenticated: boolean;
  userName: string;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.checkAuth();
  }

  async loginClicked() {
    try {
      await this.auth.login();
      this.checkAuth();
    } catch (err) {
      console.log('Error logging in:', err);
    }
  }

  async logoutClicked() {
    await this.auth.logout();
    this.checkAuth();
  }

  async refreshClicked() {
    await this.auth.refreshSession();
    this.checkAuth();
  }

  private async checkAuth() {
    this.authenticated = await this.auth.isAuthenticated();
    this.userName = await this.auth.getUserName();
  }
}
