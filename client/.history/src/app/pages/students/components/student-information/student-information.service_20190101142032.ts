import { Injectable } from '@angular/core';

@Injectable()
export class StudentsInfoService {
    constructor() { }

    DATA = [
        {
            id: 1,
            rollnumber: 15352,
            class: 'Class 1',
            section : 'A',
            firstName : 'ALi',
            lastName: 'khan',
            username: '@mdo',
            email: 'mdo@gmail.com',
            address: 'Islamabad Pakistan'
        },
        {
            id: 2,
            rollnumber: 15552,
            class: 'Class 1',
            section : 'A',
            firstName : 'kaleem',
            lastName: 'khan',
            username: 'kaleem12345',
            email: 'mdo@gmail.com',
            address: 'Islamabad Pakistan'
        },
        {
            id: 2,
            rollnumber: 15552,
            class: 'Class 2',
            section : 'B',
            firstName : 'waseem',
            lastName: 'khan',
            username: 'waseem12345',
            email: 'mdo@gmail.com',
            address: 'Islamabad Pakistan'
        }
    ];

    MARKS = [
        {
            id: 1,
            exam_type: 'Quiz 1',
            subject:
            t_marks: '100',
            obt_marks : '78',
            percentage : '78%',
            comments: 'Pass exam',
            exame_dt: '12-12-2018',
            result_dt: '24-12-2018'
        },
        {
            id: 2,
            exam_type: 'Quiz 2',
            t_marks: '20',
            obt_marks : '15',
            percentage : '65%',
            comments: 'Good',
            exame_dt: '12-12-18',
            result_dt: '15-12-18'
        },
        {
            id: 3,
            exam_type: 'Mid Term' ,
            t_marks: '50',
            obt_marks : '25',
            percentage : '50%',
            comments: 'Pass',
            exame_dt: '14-12-18',
            result_dt: '28-12-18'
        }
    ];

}
