import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'rekap',
  templateUrl: 'rekap.component.html',
  styleUrls : [ '../../css/vendor/bootstrap/css/bootstrap.min.css' , 
  '../../css/vendor/metisMenu/metisMenu.min.css' , 
  '../../css/dist/css/sb-admin-2.css',
  '../../css/vendor/morrisjs/morris.css'
  ]
  })

export class RekapComponent {
  

  constructor(
    private router: Router) { }

	gotoHome(): void {
      this.router.navigate(['/rekapitulasi/']);}
}
