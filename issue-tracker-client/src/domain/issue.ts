import { IssueStatus } from './issue-status';
import { Message } from './message';

export interface Issue {
    id: number;
    description: string;
    place: string;
    title: string;
    status: IssueStatus;
    createdAt: Date;
    modifiedAt: Date;
    messages: Message[];
}
