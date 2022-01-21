import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SujbectModel } from 'src/app/model/suject.model';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  sujectlist : SujbectModel[] = [];
  sub: any = {};
  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
     this.sujectlist = this.subjectService.getSubject();
     this.subjectService.subjectList.subscribe
      ((response: SujbectModel[])=>{
        this.sujectlist = response
      });
      console.log(this.sujectlist);
  }
}
