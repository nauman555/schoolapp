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

    <td>{{item.exam_type}}</td>
                            <td>{{item.t_marks}}</td>
                            <td>{{item.obt_marks}}</td>
                            <td>{{item.percentage}}</td>
                            <td>{{item.comments}}</td>
                            <td>{{item.exame_dt}}</td>
                            <td>{{item.result_dt}}</td>

    MARKS = [
        {
            id: 1,
            exam_type: 15352,
            t_marks: 'Class 1',
            obt_marks : 'A',
            percentage : 'ALi',
            comments: 'khan',
            exame_dt: '@mdo',
            result_dt: 'mdo@gmail.com',
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

}
