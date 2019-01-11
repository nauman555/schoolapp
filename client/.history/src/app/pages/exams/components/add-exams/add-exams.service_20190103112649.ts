import { Injectable } from '@angular/core';

@Injectable()
export class ExamsinfoService {
    constructor() { }

    DATA = [
        {
            id: 1,
            examName: 'Final Exam',
            Date: '11-11-2019',
            comments: 'Fill Exams 2019',
         
        },
        {
            id: 2,
            examName: 'Mid Term Exam',
            Date: '11-11-2019',
            comments: 'Fill Exams 2019',
         
        }
    ];

}
