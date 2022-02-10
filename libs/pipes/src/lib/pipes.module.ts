import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlEncodePipe } from './url-encode.pipe';
import { CountPriceDetail } from './count-price-result.pipe';
import { CountTimeDetail } from './count-time-result.pipe';
import { FilterDirectoriesOrPhotosOnlyPipe } from './filter-directories-or-photos-only.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UrlEncodePipe,
    CountPriceDetail,
    CountTimeDetail,
    FilterDirectoriesOrPhotosOnlyPipe,
  ],
  exports: [
    UrlEncodePipe,
    CountPriceDetail,
    CountTimeDetail,
    FilterDirectoriesOrPhotosOnlyPipe,
  ],
  providers: [
    UrlEncodePipe,
    CountPriceDetail,
    CountTimeDetail,
    FilterDirectoriesOrPhotosOnlyPipe,
  ]
})
export class PipesModule {}
