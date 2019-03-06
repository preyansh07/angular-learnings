import { Component } from '@angular/core';

interface KeyValue {
  key: string | number;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-test-app';

  carsWithStringKeys: KeyValue[] = [
    {
      key: 'tyt',
      value: 'Toyota'
    },
    {
      key: 'frd',
      value: 'Ford'
    },
    {
      key: 'mhr',
      value: 'Mahindra'
    },
    {
      key: 'mrt',
      value: 'Maruti'
    },
    {
      key: 'vgn',
      value: 'Volkswagan'
    },
    {
      key: 'nsn',
      value: 'Nissan'
    }
  ];

  carsWithIntegerKeys: KeyValue[] = [
    {
      key: 1,
      value: 'Toyota'
    },
    {
      key: 2,
      value: 'Ford'
    },
    {
      key: 3,
      value: 'Mahindra'
    },
    {
      key: 4,
      value: 'Maruti'
    },
    {
      key: 5,
      value: 'Volkswagen'
    },
    {
      key: 6,
      value: 'Nissan'
    }
  ];

  selectedCarWithStringKey = 'tyt';

  selectedCarsWithStringKeys: string[] = ['tyt', 'mhr'];

  selectedCarWithIntegerKey = 1;

  selectedCarsWithIntegerKeys: number[] = [1, 4];

  x = ['1', '4'];

  carsObject = [{ 1: 'Toyota' }, { 2: 'Ford' }, { 3: 'Mahindra' }, { 4: 'Maruti' }, { 5: 'Volkswagen' }, { 6: 'Nissan' }];

  carObject = { 1: 'Toyota' };

  // car = { key: 1, value: 'Toyota' };

  car = this.carsWithIntegerKeys[0];

}
