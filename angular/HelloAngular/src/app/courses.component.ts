import { EmailService } from './email.service';
import { CourseService } from './courses.service';
import {Component} from '@angular/core';

@Component({    // declare function
    selector: 'courses',    // css selector
    template: `
    <h2>{{"title:" + title + "," + getTitle() }}</h2>
    <h2>{{"mail:" + checkEmail }}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    `
}) 

export class CoursesComponent{ 
    //capital and Compoent end
    title = "dynamic courses";
    courses;
    checkEmail;

    //dependency injection
    constructor(public services : CourseService, email : EmailService) {
        
        this.courses = services.getCourses();       
        this.checkEmail = email.CheckEmail();
         
    }
    //test call function
    getTitle(){
        return "title method";
    }
}