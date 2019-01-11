import { Injectable } from '@angular/core';

@Injectable()
export class SubjectsDataService {
    constructor() { }

    DATA = [
        {
            id: 1,
            subject: 'English',
            lastName: 'Otto',
            username: '@mdo',
            email: 'mdo@gmail.com',
            age: '28'
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
