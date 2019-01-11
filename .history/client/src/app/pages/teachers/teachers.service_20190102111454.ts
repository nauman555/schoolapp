import { Injectable } from '@angular/core';

@Injectable()
export class TeachersDataService {
    constructor() { }

    teachers_info = [
        {
            id: 1,
            t_name: 'Sir Amir',
            t_email: 'amir@gmail.com',
            designation: 'Teacher',
            t_phoneNum: '923129885885',
            t_address: 'Lahore Pakistan',
            t_qualification: 'MA, Msc'
        },
        {
            id: 2,
            t_name: 'Sir Salman',
            t_email: 'salman@gmail.com',
            designation: 'V Principle',
            t_phoneNum: '923129885885',
            t_address: 'Rawalpindi Pakistan',
            t_qualification: 'MA, Msc , MSCS'
         
        }
    ];

}
