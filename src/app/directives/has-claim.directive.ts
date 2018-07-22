import { Directive, Input, HostBinding, Renderer, ElementRef } from '@angular/core';
import { UsuarioClaims } from '../models/usuario-claims.model';

@Directive({
  selector: '[hasClaim]'
})
export class HasClaimDirective {


  @Input() set hasClaim(tipoClaim) {
    let userClaims: Array<UsuarioClaims> = JSON.parse(localStorage.getItem("claims"));
    if (!userClaims.some(x => x.tipoClaim == tipoClaim && x.valorClaim == true)) {
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'display', 'none');
    }
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer
  ) { }



}
