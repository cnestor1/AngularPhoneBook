import { Injectable } from '@angular/core';
import {Record} from '../model/record';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }


  createDb() {
    const records = [
      {
        id: 1,
        name: 'Adam Wright',
        title: 'Software Developer',
        phone: '919-555-5555',
        email: 'adam.wright@mycompany.com',
        picture: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
        education: [
          {
            institution: 'NC State University',
            startYear: 2001,
            endYear: 2004,
            degree: 'Bachelor\'s, Computer Science'
          },
          {
            institution: 'NC State University',
            startYear: 2004,
            endYear: 2005,
            degree: 'Master\'s, Computer Science'
          }
        ],
        workExperience: [
          {
            institution: 'Megacorp',
            startYear: 2001,
            title: 'Software Developer'
          },
          {
            institution: 'Umbrella Corp',
            startYear: 1980,
            endYear: 2001,
            title: 'Software Developer'
          }
        ]
      },
      {
        id: 2,
        name: 'Joe Manfrey',
        title: 'Software Developer',
        phone: '919-666-6666',
        email: 'joe.manfrey@mycompany.com',
        education: [
          {
            institution: 'Clemson University',
            startYear: 1990,
            endYear: 1995,
            degree: 'Bachelor\'s, Computer Science'
          }
        ],
        workExperience: [
          {
            institution: 'Food Inc.',
            startYear: 1998,
            title: 'Software Developer'
          }
        ]
      },
      {
        id: 3,
        name: 'Douglas Cho',
        title: 'Software Developer',
        phone: '919-777-7777',
        email: 'douglas.cho@mycompany.com',
        education: [
          {
            institution: 'University of NC, Chapel Hill',
            startYear: 1990,
            endYear: 1995,
            degree: 'Marketing'
          }
        ],
        workExperience: [
          {
            institution: 'Food Inc.',
            startYear: 1998,
            title: 'Software Developer'
          }
        ]
      },
      {
        id: 4,
        name: 'Allison Murray',
        title: 'Software Developer',
        phone: '919-888-8888',
        email: 'allison.murray@mycompany.com',
        education: [
          {
            institution: 'University of Southern California',
            startYear: 2001,
            endYear: 2005,
            degree: 'Sociology'
          }
        ],
        workExperience: [
          {
            institution: 'United Products',
            startYear: 1998,
            title: 'Directory of IT'
          }
        ]
      },
      {
        id: 5,
        name: 'Adam Wright5',
        title: 'Software Developer',
        phone: '919-555-5555',
        email: 'adam.wright@mycompany.com',
        education: [
          {
            institution: 'NC State University',
            startYear: 2001,
            endYear: 2004,
            degree: 'Bachelor\'s, Computer Science'
          },
          {
            institution: 'NC State University',
            startYear: 2004,
            endYear: 2005,
            degree: 'Master\'s, Computer Science'
          }
        ],
        workExperience: [
          {
            institution: 'Megacorp',
            startYear: 2001,
            title: 'Software Developer'
          },
          {
            institution: 'Umbrella Corp',
            startYear: 1980,
            endYear: 2001,
            title: 'Software Developer'
          }
        ]
      },
      {
        id: 6,
        name: 'Joe Manfrey6',
        title: 'Software Developer',
        phone: '919-666-6666',
        email: 'joe.manfrey@mycompany.com',
        education: [
          {
            institution: 'Clemson University',
            startYear: 1990,
            endYear: 1995,
            degree: 'Bachelor\'s, Computer Science'
          }
        ],
        workExperience: [
          {
            institution: 'Food Inc.',
            startYear: 1998,
            title: 'Software Developer'
          }
        ]
      },
      {
        id: 7,
        name: 'Douglas Cho7',
        title: 'Software Developer',
        phone: '919-777-7777',
        email: 'douglas.cho@mycompany.com',
        education: [
          {
            institution: 'University of NC, Chapel Hill',
            startYear: 1990,
            endYear: 1995,
            degree: 'Marketing'
          }
        ],
        workExperience: [
          {
            institution: 'Food Inc.',
            startYear: 1998,
            title: 'Software Developer'
          }
        ]
      },
      {
        id: 8,
        name: 'Allison Murray8',
        title: 'Software Developer',
        phone: '919-888-8888',
        email: 'allison.murray@mycompany.com',
        education: [
          {
            institution: 'University of Southern California',
            startYear: 2001,
            endYear: 2005,
            degree: 'Sociology'
          }
        ],
        workExperience: [
          {
            institution: 'United Products',
            startYear: 1998,
            title: 'Directory of IT'
          }
        ]
      }
    ];

    return { records };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(records: Record[]): number {
    return records.length > 0 ? Math.max(...records.map(record => record.id)) + 1 : 11;
  }
}
