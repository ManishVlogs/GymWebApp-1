import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
