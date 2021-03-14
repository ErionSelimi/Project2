import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="container mt-4">
      <app-test></app-test>
      </div>
           `
})
export class AppComponent {
  title = 'test';
}
