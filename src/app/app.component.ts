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
      value: 'ford'
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
      value: 'Volkeswagon'
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
      value: 'ford'
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
      value: 'Volkeswagon'
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

}
