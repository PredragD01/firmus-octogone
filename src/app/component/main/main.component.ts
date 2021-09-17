import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  title = "Indicies";
  error: any;
  constructor(private elementRef: ElementRef, private router: Router) {
    this.router.navigateByUrl('main/indicies')
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#023d78';
  }

  activatePage(name){
    this.router.navigateByUrl('main/'+name);
  }

}
