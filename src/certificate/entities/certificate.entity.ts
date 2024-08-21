import { v4 as uuid } from 'uuid';

export class Certificate {
  id: string;
  name: string;
  course: string;
  date: Date;

  constructor(certificate: Partial<Certificate>) {
    this.id = uuid().replace(/-/g, '');
    this.name = certificate.name;
    this.date = new Date(certificate.date);
    this.course = certificate.course;
  }
}
