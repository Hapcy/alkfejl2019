import { IssueStatus } from './issue-status';

export interface Issue {
    id: number;
    description: string;
    place: string;
    title: string;
    status: IssueStatus;
    createdAt: Date;
    modifiedAt: Date;
}
