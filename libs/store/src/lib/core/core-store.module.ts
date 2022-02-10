import { coreReducer } from './core.reducer';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './core.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('core', coreReducer),
        EffectsModule.forFeature([CoreEffects])
    ],
    providers: []
})
export class CoreStoreModule {}