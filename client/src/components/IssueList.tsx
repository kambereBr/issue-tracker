import React from 'react';
import IssueItem from './IssueItem';
import { IssueData } from '../types';

interface IssueListProps {
  issues: IssueData[];
  onUpdateIssue: (id: number, updatedData: Partial<IssueData>) => void;
  onDeleteIssue: (id: number) => void;
}

const IssueList: React.FC<IssueListProps> = ({ issues, onUpdateIssue, onDeleteIssue }) => {
  return (
    <div className="issue-list">
      {issues.map((issue) => (
        <IssueItem
          key={issue.id}
          issue={issue}
          onUpdate={onUpdateIssue}
          onDelete={onDeleteIssue}
        />
      ))}
    </div>
  );
};

export default IssueList;
