import { Injectable } from '@angular/core';

@Injectable()
export class ExamsinfoService {
    constructor() { }

    DATA = [
        {
            id: 1,
            examName: 'Final Exam',
            Date: '11-11-2019',
            comments: 'Fill Exams summer ',
         
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
