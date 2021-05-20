import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit { // pode se usar onchange quando troca...

  @Input("myForEm") numbers : number[];
  @Input("myForUsando") usando: string;

  constructor(private conteiner: ViewContainerRef, private template: TemplateRef<any>) {

  }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.conteiner.createEmbeddedView(this.template, { $implicit: number})
    }
  }

}
