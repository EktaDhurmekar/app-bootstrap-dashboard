import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public pushRightClass: string = 'push-right';

  constructor(public router: Router) {
      this.router.events.subscribe((val) => {
          if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
              this.toggleSidebar();
          }
      });
  }

  ngOnInit() {
     
  }
  
  isToggled(): boolean {
    const dom: any = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
}

  toggleSidebar() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle(this.pushRightClass);
  }

  onLoggedout() {
     alert('logout');
  }

}
