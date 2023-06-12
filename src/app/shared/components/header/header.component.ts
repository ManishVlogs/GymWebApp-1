import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks = [
    { label: 'CLASSES', path: '/home' },
    { label: 'MEMBERSHIP', path: '/about' },
    { label: 'PERSONAL TRAINNG', path: '/services' },
    { label: 'BLOG', path: '/services' },
    { label: 'CONTACT', path: '/contact' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
