import { ReactElement } from "react";

export interface IUserLogin {
  username?: string;
  category?: string;
}

export interface IOptions {
  id: number;
  label: string;
}
export interface IQuestions {
  id: number;
  description: string;
  options: IOptions[];
}

export interface IAnswers {
  id: number;
  question_id: number;
  option_id: number;
  correct: boolean;
}
export interface IRound {
  id: number;
  player_id: number;
  questions: IQuestions[];
  answers: IAnswers[];
}

export interface IPropsRound {
  round: IRound;
}

export interface IUser {
  Login: ({ username, category }: IUserLogin) => void;
  username: string;
  points: number;
  isLogged: boolean;
  questions: IQuestions[];
  URL: string;
  calculatePoints: (round: number, answers: IAnswers) => void;
  round: number;
  totalRounds: number;
  matchId: number;
}

export interface IProvider {
  children: ReactElement;
}
