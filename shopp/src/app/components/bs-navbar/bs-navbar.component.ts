import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "bs-navbar",
  templateUrl: "./bs-navbar.component.html",
  styleUrls: ["./bs-navbar.component.css"]
})
export class BsNavbarComponent implements OnInit {
  constructor(public auth: AuthService) {
    // afAuth.authState.subscribe(user => console.log(user.displayName));
    // afAuth.authState.subscribe(user => (this.user = user));
  }

  ngOnInit() {}
  logout() {
    this.auth.logout();
  }
}
