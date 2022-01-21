import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent implements OnInit {
  isAdd : boolean = true;
  subjectId: number = 0;
  currentPage : string  = '';
  subjectForm: FormGroup = new FormGroup({});

  constructor(private route: ActivatedRoute, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params : Params)=>{
      this.subjectId = +params['id'];
      this.isAdd = params['id'] == null;
      console.log(params['id']);
      this.initForm();
    })
  }

  private initForm(){
    let subject = '';
    let level = '';

    if(!this.isAdd){
      const sub = this.subjectService.getSubjectbyId(this.subjectId);
      subject = sub.subject;
      level = sub.level;
    }
    this.subjectForm = new FormGroup({
      subject : new FormControl(subject, Validators.required),
      level : new FormControl(level, Validators.required)
    })
    
    console.log(this.subjectForm.value);
  }
  onSubmit(){
    console.log(this.subjectForm.value);
    if(this.isAdd){
      this.subjectService.saveSubject(this.subjectForm.value);
    }
    else{
      console.log("new");
    }
  }
}
