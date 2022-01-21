import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { SujbectModel } from "../model/suject.model";

@Injectable({providedIn:'root'})
export class SubjectService{

    subjectList = new Subject<SujbectModel[]>();

    private subjects : SujbectModel[] = [
        new SujbectModel('bangla', 'clas1'),
        new SujbectModel('Biology', 'clas9'),
        new SujbectModel('Math', 'clas1'), 
        new SujbectModel('Enaglish', 'clas1'), 
        new SujbectModel('CSE', 'clas1'), 
        new SujbectModel('EEE', 'clas1'),
    ]
    constructor(private http: HttpClient){}

    getSubject(){
        // return this.http.get<SujbectModel[]>('https://mahbubangular-default-rtdb.firebaseio.com/subjects.json')
        // ;
        return this.subjects.slice();
    }
    getSubjectbyId(id: number){
        return this.subjects[id];
    }

    saveSubject(payload: SujbectModel){
        // this.http.put('https://mahbubangular-default-rtdb.firebaseio.com/subjects.json',payload)
        // .subscribe(response=>{
        //     console.log(response);
        // })
        this.subjects.push(payload);
        this.subjectList.next(this.subjects.slice());
    }

    updateSubject(id: number, payload: SujbectModel){
        this.subjects[id] = payload;
        this.subjectList.next(this.subjects.slice());
    }
}