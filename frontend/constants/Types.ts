export interface RAssessment {
    id: number;
    title: string;
    strand: string;
    subStrand: string;
    allDay: boolean;
    alert: boolean;
    completion: string;
    date: string;
}

export interface WAssessment {
    title: string;
    strand: string;
    subStrand: string;
    allDay: boolean;
    alert: boolean;
    completion: string;
    date: string;
}
