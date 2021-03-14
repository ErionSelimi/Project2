
export interface ITeam {
  name: string;
  approvedBy: {
    statusManager: Status
    statusDirector: Status
  }
}

export type Status = 'Approved' | 'Not Approved' | 'No-Action-Taken';
