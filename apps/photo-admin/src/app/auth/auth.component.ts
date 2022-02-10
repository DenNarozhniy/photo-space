import { AuthService } from './../../../../../libs/services/src/lib/api/auth.service';
import { AuthState } from './../../../../../libs/store/src/lib/auth/auth.state';
import { selectIsLogin } from './../../../../../libs/store/src/lib/auth/auth.selectors';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public isLogin$: Observable<boolean>;

  constructor(
    public authService: AuthService,
    private store: Store<{auth: AuthState}>
    ) {
    this.isLogin$ = store.pipe(select(selectIsLogin));
  }

  ngOnInit(): void {
    this.isLogin$.subscribe(res => console.log(res));
  }

  logout(): void {
    this.authService.logout();
  }

}
