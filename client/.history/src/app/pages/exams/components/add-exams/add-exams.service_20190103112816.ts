import { Injectable } from '@angular/core';

@Injectable()
export class ExamsinfoService {
    constructor() { }

    EXAM = [
        {
            id: 1,
            examName: 'Final Exam',
            Date: '11-11-2019',
            comments: 'Fill Exams 2019',
         
        },
        {
            id: 2,
            examName: 'Mid Term Exam',
            Date: '11-05-2019',
            comments: 'Mid Term Exams 2019',
         
        }
    ];

}
