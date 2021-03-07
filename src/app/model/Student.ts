import {Course} from './Course';

export class Student {
  constructor(
    public regName: string,
    public fName: string,
    public lName: string,
    public streetNo: string,
    public firstStreet: string,
    public secondStreet: string,
    public town: string,
    public telephone: string,
    public courses: Course[]
  ) {
  }
}
