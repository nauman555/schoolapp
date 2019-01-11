import { Injectable } from '@angular/core';

@Injectable()
export class SubjectsDataService {
    constructor() { }

    DATA = [
        {
            id: 1,
            subject: 'English',
            class: 'Otto',
            section: '@mdo',
            teacher: 'mdo@gmail.com'
         
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
