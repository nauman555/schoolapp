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
            rollnumber: 15552,
            class: 'Class 1',
            section : 'A',
            firstName : 'kaleem',
            lastName: 'khan',
            username: 'kaleem12345',
            email: 'mdo@gmail.com',
            address: 'Islamabad Pakistan'
        },
        {
            id: 2,
            rollnumber: 15552,
            class: 'Class 2',
            section : 'B',
            firstName : 'waseem',
            lastName: 'khan',
            username: 'waseem12345',
            email: 'mdo@gmail.com',
            address: 'Islamabad Pakistan'
        }
    ];

    MARKS = [
        {
            id: 1,
            exam_type: 'Quiz 1',
            subject: 'Math',
            t_marks: '100',
            obt_marks : '78',
            percentage : '78%',
            status: 'Pass',
            exame_dt: '12-12-2018',
            result_dt: '24-12-2018'
        },
        {
            id: 2,
            exam_type: 'Quiz 2',
            subject: 'Computer',
            t_marks: '20',
            obt_marks : '15',
            percentage : '65%',
            status: 'Pass',
            exame_dt: '12-12-18',
            result_dt: '15-12-18'
        },
        {
            id: 3,
            exam_type: 'Mid Term' ,
            subject: 'English',
            t_marks: '50',
            obt_marks : '25',
            percentage : '50%',
            status: 'Pass',
            exame_dt: '14-12-18',
            result_dt: '28-12-18'
        }
    ];

    FEE_INVOICE =[

        {
            id: 3,
            title: 'Monthly Fee' ,
            month: 'August',
            created_date: '12-07-18',
            last_date : '22-07-18',
            paid_date : '21-07-18%',
            total_amount: '10,000',
            pay_amount: '10,000',
            description: 'monthly fee',
            status
        },
        {
            id: 4,
            title: 'Monthly Fee' ,
            month: 'September',
            created_date: '12-08-18',
            last_date : '22-08-18',
            paid_date : '21-08-18%',
            total_amount: '10,000',
            pay_amount: '10,000',
            description: 'monthly fee'
        }



    ];

}
