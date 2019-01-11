import { Injectable } from '@angular/core';

@Injectable()
export class SubjectsDataService {
    constructor() { }

    DATA = [
        {
            id: 1,
            subject: 'English',
            class: '1',
            section: 'A',
            teacher: 'Nazir',
            subjectType: 'Core'
         
        },
        {
            id: 2,
            subject: 'Maths',
            class: '2',
            section: 'A',
            teacher: 'Ali',
            subjectType: 'Elective'
         
        }
    ];

}
