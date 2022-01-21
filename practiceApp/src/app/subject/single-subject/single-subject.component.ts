import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SujbectModel } from 'src/app/model/suject.model';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-single-subject',
  templateUrl: './single-subject.component.html',
  styleUrls: ['./single-subject.component.css']
})
export class SingleSubjectComponent implements OnInit {

  @Input() selectedSubject : SujbectModel;
  @Input() id: number;
  constructor(private subjectService: SubjectService) { 
    this.selectedSubject = new SujbectModel('','');
    this.id = 0;
  }

  ngOnInit(): void {
    console.log(this.id);
  }
}
