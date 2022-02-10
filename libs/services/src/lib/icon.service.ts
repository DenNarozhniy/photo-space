import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  private icons = [];
  constructor(
      private matIconRegistry: MatIconRegistry,
      private sanitizer: DomSanitizer
  ) {

  }

  register(name: string) {
      if(this.icons.indexOf(name) === -1){
          this.icons.push(name);
          this.matIconRegistry.addSvgIcon(
              name,
              this.sanitizer.bypassSecurityTrustResourceUrl(
                  `assets/icons/${name}.svg`
              )
          );
      }
  }
}
