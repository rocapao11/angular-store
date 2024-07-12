import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required:true}) duration:number = 1;
  @Input({required:true}) message:string = '';
  counter = signal(0);
  counterRef: number | undefined

  constructor() {
    //NO ASYNC (No podemos colocar una promesa un subcribe o cualquier cosa que necesite de algun tiempo o demora) Solo variables directas
    //Before Render
    //Solo corre una vez
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes:SimpleChanges) {
    //(corre varias veces) before & during Render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    //before Render (inicializado pero aun no renderizado mejor lugar para poner los observables)
    // solo corre una vez, perfecto para cosas async, then, subcribe
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(()=> {
      console.log('run interval');
      this.counter.update(statePrev => statePrev + 1);
    }, 1000)
  }

  ngAfterViewInit(){
    //after Render
    //Es para preguntar si los hijos de este componente ya fueron renderizados(pintados)
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy(){
  //ve cuando el componente se destruye
  console.log('ngOnDestroy');
  console.log('-'.repeat(10));
  window.clearInterval(this.counterRef)
  }

  doSomething(){
    //aqui tambien se pueden ejecutar cosas Async
    console.log('change duration');
  }
}

