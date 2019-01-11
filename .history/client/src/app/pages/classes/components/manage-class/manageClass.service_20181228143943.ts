import { Injectable } from '@angular/core';

@Injectable()
export class ClassDataService {
    constructor() { }

    DATA = [
        {
            id: 1,
            firstName: 'Mark',
            lastName: 'Otto',
            username: '@mdo',
            email: 'mdo@gmail.com',
            age: '28'
        },
        {
            id: 2,
            firstName: 'Jacob',
            lastName: 'Thornton',
            username: '@fat',
            email: 'fat@yandex.ru',
            age: '45'
        }
    ];

}
