import { Injectable } from '@angular/core';

@Injectable()
export class ExamsinfoService {
    constructor() { }

    EXAM_INFO = [
        {
            id: 1,
            examName: 'Final Exam',
            examDate: '11-11-2019',
            comment: 'Fill Exams 2019',
         
        },
        {
            id: 2,
            examName: 'Mid Term Exam',
            examDate: '11-05-2019',
            comment: 'Mid Term Exams 2019',
         
        }
    ];

}
