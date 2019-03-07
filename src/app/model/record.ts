export class Record {
    id: number;
    name: string;

    title: string;
    phone: string;
    email: string;
    education: [
        {
            institution: string;
            startYear: number,
            endYear: number,
            degree: string;
        }
    ];
    workExperience: [
        {
            institution: string,
            startYear: number,
            title: string;
        }
    ];
}
