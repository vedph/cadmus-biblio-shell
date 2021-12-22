import { Component, OnInit, Inject } from '@angular/core';
import { ThesaurusEntry } from '@myrmidon/cadmus-core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import {
  AuthJwtService,
  GravatarService,
  User,
} from '@myrmidon/auth-jwt-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public user?: User;
  public logged?: boolean;
  public itemBrowsers?: ThesaurusEntry[];

  constructor(
    private _authService: AuthJwtService,
    private _gravatarService: GravatarService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.user = this._authService.currentUserValue || undefined;
    this.logged = this.user !== null;

    this._authService.currentUser$.subscribe((user: User | null) => {
      this.logged = this._authService.isAuthenticated(true);
      this.user = user || undefined;
    });
  }

 public getGravatarUrl(email: string, size = 80): string | null {
    return this._gravatarService.buildGravatarUrl(email, size);
  }

  public logout(): void {
    if (!this.logged) {
      return;
    }
    this._authService
      .logout()
      .pipe(take(1))
      .subscribe((_) => {
        this._router.navigate(['/home']);
      });
  }
}
