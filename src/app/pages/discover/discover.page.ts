import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
    slideOpts = {
      initialSlide: 0,
      speed: 400,
    };

  constructor() { }

  ngOnInit() {
  }

}
