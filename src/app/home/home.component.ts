import {
  Component,
  OnInit
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public event = {
    alertData: {},
    test: false
  };

  public eventFormData = {
    eventTypes: [
      'Výjezd',
      'Záloha',
      'Hlášení'
    ],
    eventDataTypes: [
      'Požár',
      'Dopravní nehoda',
      'Technická pomoc',
      'Ostatní'
    ],
    eventCars: [
      'CAS 20 T 815',
      'CAS 32 T 815',
      'CAS 32 T 148',
      'VEA L2Z Ford Ranger',
      'UA VW Caravelle'
    ],
    buttons: [
      {
        primary: {
          show: true,
          text: 'Vyhlásit poplach',
          color: 'warn'
        },
        secondary: {
          show: true,
          text: 'Zkouška poplachu',
          color: 'none'
        }
      },
      {
        primary: {
          show: true,
          text: 'Vyhlásit zálohu',
          color: 'warn'
        },
        secondary: {
          show: true,
          text: 'Zkouška poplachu',
          color: 'none'
        }
      },
      {
        primary: {
          show: false,
          text: 'Vyhlásit zálohu',
          color: 'warn'
        },
        secondary: {
          show: true,
          text: 'Zkouška rozhlasu',
          color: 'primary'
        }
      }
    ]
  };

  public allowSubmit = false;

  constructor(private httpClient: HttpClient) { }

  public ngOnInit() {}

  public submit() {
    this.event.test = false;
    this._processEvent();
  }

  public submitTest() {
    this.event.test = true;
    this._processEvent();
  }

  private _processEvent() {
    console.log(this.event);

    this.httpClient
      .post('http://192.168.137.16:3000/api/speak/object', this.event)
      .subscribe(
        (data) => {
          console.log(data);
        }
      );
  }
}
