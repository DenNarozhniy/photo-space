import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './authReducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('auth', authReducer),
    ],
    providers: []
})
export class AuthStoreModule {}
