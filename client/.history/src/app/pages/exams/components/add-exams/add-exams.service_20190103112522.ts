import { Injectable } from '@angular/core';

@Injectable()
export class ExamsinfoService {
    constructor() { }

    DATA = [
        {
            id: 1,
            examName: 'Mark',
            Date: 'Otto',
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
