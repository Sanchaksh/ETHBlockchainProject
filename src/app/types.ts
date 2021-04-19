export interface Poll {
  id: number;
  question: string;
  results: number[];
  options: string[];
  thumbnail: string;
}

export interface Voter {
  id: string;
  voted: number[];
}
