import { Injectable } from '@angular/core';

@Injectable()
export class StudentsInfoService {
    constructor() { }

    DATA = [
        {
            <th>Roll Number</th>
                        <th>Name </th>
                        <th>Email </th>
                        <th>Address</th>
     
                       <th>Class </th>
                       <th>Section Name</th>
                      
                      <th>Actions</th>
            id: 1,
            rollnumber:15352
            firstName: 'A',
            lastName: 'Otto',
            username: '@mdo',
            email: 'mdo@gmail.com',
            age: '28'
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
