import { Injectable } from '@angular/core';
import { IonicAuthOptions } from '@ionic-enterprise/auth';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthConfigService {
  get config(): IonicAuthOptions {
    const isNative = this.platform.is('hybrid');
    return {
      authConfig: 'azure',
      clientID: 'ed8cb65d-7bb2-4107-bc36-557fb680b994',
      discoveryUrl:
        'https://dtjacdemo.b2clogin.com/dtjacdemo.onmicrosoft.com/B2C_1_acdemo2/v2.0/.well-known/openid-configuration',
      scope:
        'openid offline_access email profile https://dtjacdemo.onmicrosoft.com/ed8cb65d-7bb2-4107-bc36-557fb680b994/demo.read',
      audience: '',
      redirectUri: isNative ? 'msauth://com.ionic.acprovider/O5m5Gtd2Xt8UNkW3wk7DWyKGfv8%3D' : 'http://localhost:8100',
      logoutUrl: isNative ? 'msauth://com.ionic.acprovider/O5m5Gtd2Xt8UNkW3wk7DWyKGfv8%3D' : 'http://localhost:8100',
      platform: isNative ? 'capacitor' : 'web',
      iosWebView: isNative ? 'private' : undefined,
      androidToolbarColor: isNative ? '#4424eb' : undefined,
      logLevel: 'DEBUG',
    };
  }

  constructor(private platform: Platform) {}
}
