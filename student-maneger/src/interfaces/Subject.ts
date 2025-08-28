export type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

export interface Subject {
    id: number;
    name: string;
    students: number[];
    grades: Grade[];
}