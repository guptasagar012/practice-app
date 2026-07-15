import { computeMsgId } from '@angular/compiler';
import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})



export class App {
  protected readonly title = signal('angular-app-concepts');
  count = 10;
  signalCount: WritableSignal<any> = signal(10);
  x= [10];
  y=[20];
  // a= signal(20);
  z= computed(() => this.x[0] + this.y[0]);







  constructor() {
    effect(() => {
      // console.log('Count without signal : ', this.count);
      console.log('Count with signal : ', this.signalCount());
    });
      // console.log('signal : ', this.signalCount());

  }



updateValue() {
    // this.count = this.count + 1;
    // this.signalCount.update((value) => value + '1');
    // this.signalCount.set(20);
    // this.z;
    console.log('z : ', this.z());
    this.x[0]++;
    console.log('z : ', this.z());
    this.y[0]++;
    console.log('z : ', this.z());



  }


  // signalCount: WritableSignal<number | string> = signal(10);

  // constructor() {
  //   effect(() => {
  //     console.log('Count without signal : ', this.count);
  //     console.log('Count with signal : ', this.signalCount());
  //   });
  // }

  
}

