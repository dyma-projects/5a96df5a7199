import {Directive, ElementRef, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appColor]'
})

export class ColorDirective {
  private colors: {} = {
    37: 'blue',
    38: 'red',
    39: 'orange',
    40: 'yellow'
  };
  @HostListener('window:keydown', ['$event']) windowClick($event) {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.colors[$event.keyCode]);
  }
  constructor(private el: ElementRef, private renderer: Renderer2){ }
}
