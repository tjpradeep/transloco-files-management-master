import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponentComponent } from './demo-component/demo-component.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'demo-component' }],
  declarations: [DemoComponentComponent],
  exports: [DemoComponentComponent]
})
export class DemoLibModule {}
