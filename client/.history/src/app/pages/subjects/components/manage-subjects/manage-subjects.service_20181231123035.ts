import { Injectable } from '@angular/core';

@Injectable()
export class SubjectsDataService {
    constructor() { }

    DATA = [
        {
            id: 1,
            subject: 'English',
            class: '1',
            section: '@mdo',
            teacher: 'mdo@gmail.com'
         
        },
        {
            id: 2,
            subject: 'Maths',
            class: '2',
            section: '@A',
            teacher: 'mdo@gmail.com'
         
        }
    ];

}
