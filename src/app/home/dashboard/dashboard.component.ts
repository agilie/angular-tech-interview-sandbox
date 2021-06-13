import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {fakeUsers, emittedUsers} from './data/fake-data.storage';
import {IUser} from './interface/user.interface';
import {ErrorServiceService} from '../service/error-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
  imageUrl = 'httos://some-fake-image-url';
  users: IUser[] = fakeUsers;
  emittedUsers: IUser[] = emittedUsers;
  intervalId: any;

  constructor(
    private errorService: ErrorServiceService,
    private cdr: ChangeDetectorRef,
  ) {
  }

  ngOnInit(): void {
    try {
      this.getUsers();
    } catch (e) {
      this.errorService.displayError(e);
    }
  }

  public onGetFullName(user: IUser): string {
    try {
      return user.first_name + ' ' + user.last_name;
    } catch (e) {
      this.errorService.displayError(e);
      return 'Unknown';
    }
  }

  getUsers(): void {
    this.intervalId = setInterval( () => {
      this.users = [...this.users, ...this.emittedUsers];
      this.cdr.detectChanges();
    }, 200);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
