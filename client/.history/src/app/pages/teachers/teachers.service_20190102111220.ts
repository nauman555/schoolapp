import { Injectable } from '@angular/core';

@Injectable()
export class TeachersDataService {
    constructor() { }

    DATA = [
        {
            id: 1,
            t_name: 'English',
            t_email: '1',
            designation: 'A',
            t_phoneNum: 'Nazir',
            t_address: 'Core'
            t_qualification: ''
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
