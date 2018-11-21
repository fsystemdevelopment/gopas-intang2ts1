import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VotingComponent } from "./voting/voting.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [VotingComponent],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [VotingComponent]
})
export class CounterModule {}
