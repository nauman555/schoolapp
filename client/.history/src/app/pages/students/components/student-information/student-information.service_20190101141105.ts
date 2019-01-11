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
            t_marks: '1000',
            obt_marks : '78',
            percentage : '78%',
            comments: 'khan',
            exame_dt: '@mdo',
            result_dt: 'mdo@gmail.com'
        },
        {
            id: 2,
            exam_type: 15352,
            t_marks: 'Class 1',
            obt_marks : 'A',
            percentage : 'ALi',
            comments: 'khan',
            exame_dt: '@mdo',
            result_dt: 'mdo@gmail.com'
        },
        {
            id: 3,
            exam_type: 15352,
            t_marks: 'Class 1',
            obt_marks : 'A',
            percentage : 'ALi',
            comments: 'khan',
            exame_dt: '@mdo',
            result_dt: 'mdo@gmail.com'
        }
    ];

}
