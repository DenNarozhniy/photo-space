import { PsButtonModule } from './../../../ui/src/lib/button/button.module';
import { RowModule } from './../../../ui/src/lib/row/row.module';
import { TemplateCompositorComponent } from './template-compositor/template-compositor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleItemWithSlideComponent } from './simple-item-with-slide/simple-item-with-slide.component';
import { AngularMaterialModule } from '@photo-space/angular-material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SquareCarouselComponent } from './square-carousel/square-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SimpleInfoItemComponent } from './simple-info-item/simple-info-item.component';
import { SendEmailFormComponent } from './send-email-form/send-email-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    CarouselModule,
    RowModule,
    PsButtonModule,
  ],
  declarations: [
    SimpleItemWithSlideComponent,
    TemplateCompositorComponent,
    SquareCarouselComponent,
    SimpleInfoItemComponent,
    SendEmailFormComponent
  ],
  exports: [
    TemplateCompositorComponent,
    SimpleItemWithSlideComponent,
    SquareCarouselComponent,
    SimpleInfoItemComponent,
    SendEmailFormComponent
  ]
})
export class SharedComponentsModule {}
