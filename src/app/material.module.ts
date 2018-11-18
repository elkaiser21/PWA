import {NgModule} from '@angular/core';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatTableModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatTableModule],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatTableModule]
})
export class MaterialModule {}
