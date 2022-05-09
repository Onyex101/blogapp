import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
const { Storage } = Plugins;
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  async goToLogin() {
    await Storage.set({
      key: 'hasSeenIntro',
      value: 'true'
    });
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }
}
