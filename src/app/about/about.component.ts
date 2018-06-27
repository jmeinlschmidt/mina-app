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
  selector: 'about',  // <home></home>
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  public allowSubmit = false;

  public test = false;

  public message = '​Vyjezd POZAR, NIZKE BUDOVY, Ceska Lipa, CAS 20 T 815, HCL 221, , Pod Spicakem, P neobydleneho domu slouzi jako sklad, kour, u nemocnice;';

  /**
   * TypeScript public modifiers
   */
  constructor(private httpClient: HttpClient) { }

  public ngOnInit() {}

  public submit() {
    this.test = false;
    this._processEvent();
  }

  public submitTest() {
    this.test = true;
    this._processEvent();
  }

  private _processEvent() {
    this.httpClient
      .post('http://192.168.137.16:3000/api/speak/text', { message: this.message, test: this.test })
      .subscribe(
        (data) => {
          console.log(data);
        }
      );
  }
}
