import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IEmployee } from '../Model/employee';
import { EmployeeService } from '../Service/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  addEmployeeFormGroup: FormGroup;
 constructor(
    public dialogRef: MatDialogRef<EmployeeEditComponent>,
   @Inject(MAT_DIALOG_DATA) public data: IEmployee, private fb: FormBuilder, private employeeService: EmployeeService) {
      this.addEmployeeFormGroup = this.fb.group({
        firstName: ['', Validators.required],
        middleName: [''],
        lastName: ['',Validators.required],
      })
    }
  close() {
         this.dialogRef.close();
  }
  onSubmit(): void {
    if (this.data.isDelete) {
        this.employeeService.Delete(this.data.id).subscribe((resp) => {
            this.dialogRef.close();
          });
    } else {
        if (this.data.id == 0) {
          this.employeeService.Add(this.addEmployeeFormGroup.getRawValue()).subscribe((resp) => {
            this.dialogRef.close();
          });
        } else {
          this.employeeService.Update({...this.addEmployeeFormGroup.getRawValue(),id: this.data.id}).subscribe((resp) => {
              this.dialogRef.close();
            });
        }
    }
  
  }
  ngOnInit(): void {
    this.addEmployeeFormGroup.patchValue(this.data);
  }

}
