import { Component } from '@angular/core';
import { Poll } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm = false;
  activePoll!: Poll;

  polls: Poll[] = [
    {
      id: 1,
    question: 'Do you like dogs or cats?',
    thumbnail: 'https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg',
    results: [0,5,7],
    options: ['Cats', 'Dogs', 'None'],
    voted: true,
  },
  {
    id: 2,
    question: 'Best Month for summer holidays?',
    thumbnail: 'https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg',
    results: [1, 6, 4],
    options: ['June', 'July', 'August'],
    voted: false,
  }
];

  setActivePoll(poll: Poll) {
    this.activePoll = null as any;

    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }
}
