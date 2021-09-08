import { Injectable } from '@angular/core';
import { IonicAuthOptions } from '@ionic-enterprise/auth';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthConfigService {
  get config(): IonicAuthOptions {
    const isAndroid = this.platform.is('android');
    const isIos = this.platform.is('ios');
    const isNative = isAndroid || isIos;
    return {
      authConfig: 'azure',
      clientID: '9a8d6b59-d8cd-48dc-b166-7f14851dbe2a',
      discoveryUrl:
        'https://dtjacdemo.b2clogin.com/dtjacdemo.onmicrosoft.com/B2C_1_signin/v2.0/.well-known/openid-configuration',
      scope:
        'openid offline_access email profile https://dtjacdemo.onmicrosoft.com/9a8d6b59-d8cd-48dc-b166-7f14851dbe2a/Open.Read',
      audience: '',
      redirectUri: isAndroid
        ? 'msauth://io.ionic.gettingstartedacangular/lvGC0B4SWYU8tNPHg%2FbdMjQinZQ%3D'
        : isIos
        ? 'msauth.io.ionic.gettingstartedacangular://auth'
        : 'http://localhost:8100/tabs/tab1',
      logoutUrl: isNative
        ? 'msauth://io.ionic.gettingstartedacangular/lvGC0B4SWYU8tNPHg%2FbdMjQinZQ%3D'
        : isIos
        ? 'msauth.io.ionic.gettingstartedacangular://auth'
        : 'http://localhost:8100/tabs/tab1',
      platform: isNative ? 'capacitor' : 'web',
      iosWebView: isNative ? 'private' : undefined,
      androidToolbarColor: isNative ? '#4424eb' : undefined,
      logLevel: 'DEBUG',
    };
  }

  constructor(private platform: Platform) {}
}
