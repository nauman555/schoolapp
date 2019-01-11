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
            firstName: 'B',
            lastName: 'Thornton',
            username: '@fat',
            email: 'fat@yandex.ru',
            age: '45'
        }
    ];

}
