import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from '..';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './core/core.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
  ],
})
export class CommonStoreModule {}
