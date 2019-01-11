import { Injectable } from '@angular/core';

@Injectable()
export class TeachersDataService {
    constructor() { }

    DATA = [
        {
            id: 1,
            t_name: 'Sir Amir',
            t_email: 'amir@gmail.com',
            designation: 'Teacher',
            t_phoneNum: 'Nazir',
            t_address: 'Core',
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
