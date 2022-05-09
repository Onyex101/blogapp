import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
const { Storage } = Plugins;
import { Plugins } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(private router: Router) { }
  async canActivate(): Promise<boolean> {
    const { value } = await Storage.get({ key: 'hasSeenIntro' });
    console.log('hasSeenIntro: ', value);
    if (value === 'true') {
      this.router.navigateByUrl('/login', { replaceUrl: true });
      return false;
    } else {
      return true;
    }
  }

}
