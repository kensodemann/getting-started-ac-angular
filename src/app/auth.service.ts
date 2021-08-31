import { Injectable } from '@angular/core';
import { IonicAuth } from '@ionic-enterprise/auth';
import { AuthConfigService } from './auth-config.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends IonicAuth {
  constructor(authConfig: AuthConfigService) {
    super(authConfig.config);
  }

  async getUserName(): Promise<string | undefined> {
    const token = await this.getIdToken();
    return token?.name;
  }
}
