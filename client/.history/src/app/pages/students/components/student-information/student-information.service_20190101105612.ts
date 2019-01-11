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
        }
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
