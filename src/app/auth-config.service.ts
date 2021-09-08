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
      clientID: 'ba594fcc-3d50-4844-bd94-75290a305c0b',
      discoveryUrl:
        'https://login.microsoftonline.com/20f8e206-5bfd-4085-9ab0-9e2fca01f2a4/v2.0/.well-known/openid-configuration',
      scope:
        'openid offline_access email profile https://dtjacdemo.onmicrosoft.com/ba594fcc-3d50-4844-bd94-75290a305c0b/test.it',
      audience: '',
      redirectUri: isNative
        ? 'msauth://io.ionic.gettingstartedacangular/lvGC0B4SWYU8tNPHg%2FbdMjQinZQ%3D'
        : 'http://localhost:8100/tabs/tab1',
      logoutUrl: isNative
        ? 'msauth://io.ionic.gettingstartedacangular/lvGC0B4SWYU8tNPHg%2FbdMjQinZQ%3D'
        : 'http://localhost:8100/tabs/tab1',
      platform: isNative ? 'capacitor' : 'web',
      iosWebView: isNative ? 'private' : undefined,
      androidToolbarColor: isNative ? '#4424eb' : undefined,
      logLevel: 'DEBUG',
    };
  }

  constructor(private platform: Platform) {}
}
