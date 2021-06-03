import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
import { IEmployee } from '../Model/employee';
import { EmployeeService } from '../Service/employee.service';
import { mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'middleName', 'lastName','action'];
  dataSource: IEmployee[] = [];
  constructor(private employeeService: EmployeeService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.employeeService.GetAll().subscribe((source) => this.dataSource = source);
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(EmployeeEditComponent, {
      width: '350px',
      data: <IEmployee>{
        id: 0
      }
    });

    dialogRef.afterClosed().pipe(mergeMap((result) => this.employeeService.GetAll())).subscribe((source) => this.dataSource = source);

  }

  openEditDialog(data: IEmployee): void {
    
      const dialogRef = this.dialog.open(EmployeeEditComponent, {
        width: '350px',
        data: data
      });

      dialogRef.afterClosed().pipe(mergeMap((result) => this.employeeService.GetAll())).subscribe((source) => this.dataSource = source);

  }

  openDeleteDialog(data: IEmployee): void {
         const dialogRef = this.dialog.open(EmployeeEditComponent, {
        width: '350px',
        data: {...data,isDelete: true}
      });

      dialogRef.afterClosed().pipe(mergeMap((result) => this.employeeService.GetAll())).subscribe((source) => this.dataSource = source);

  }

}
