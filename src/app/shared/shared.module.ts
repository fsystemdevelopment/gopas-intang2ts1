import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [],
  imports: [MatButtonModule, MatRadioModule, CommonModule],
  exports: [MatButtonModule, MatRadioModule, MatInputModule]
})
export class SharedModule {}
