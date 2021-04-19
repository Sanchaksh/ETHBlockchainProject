import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss']
})
export class PollVoteComponent implements OnInit {

  options = ["Monday", "Tuesday", "Wednesday"]
  voteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.voteForm = this.fb.group({
      selected: this.fb.control("", [Validators.required]),
    })
   }

  ngOnInit(): void {
  }
  submitForm() {
    console.log(this.voteForm.value);
  }

}
