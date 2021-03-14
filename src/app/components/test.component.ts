import { Component } from '@angular/core';
import { Status, ITeam } from '../models/ITeam';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test',
  templateUrl: 'test.component.html',
  styleUrls: ['test.component.css'],
})
export class TestComponent {

  constructor(private toast: ToastrService) {
  }

  teams: ITeam[] = [
    {
      name: 'Team 1',
      approvedBy: {
        statusManager: 'No-Action-Taken',
        statusDirector: 'No-Action-Taken'
      }
    },
    {
      name: 'Team 2',
      approvedBy: {
        statusManager: 'No-Action-Taken',
        statusDirector: 'No-Action-Taken'
      }
    },
    {
      name: 'Team 3',
      approvedBy: {
        statusManager: 'No-Action-Taken',
        statusDirector: 'No-Action-Taken'
      }
    },
    {
      name: 'Team 4',
      approvedBy: {
        statusManager: 'No-Action-Taken',
        statusDirector: 'No-Action-Taken'
      }
    }
  ];

  role = '';

  handleStatusChange(newStatus: Status, team1: ITeam, role: 'manager' | 'director'): void {

    this.toast.success('Team Status Saved');

    this.teams = this.teams.map(team => {
      if (team.name === team1.name) {
        let newTeam = { ...team };
        if (role === 'manager') {
          newTeam.approvedBy.statusManager = newStatus;
          return newTeam;
        }

        newTeam.approvedBy.statusDirector = newStatus;
        return newTeam;

      } else {
        return team;
      }
    });

  }

}
