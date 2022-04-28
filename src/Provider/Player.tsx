import { createContext, useState } from "react";
import {
  IProvider,
  IUser,
  IUserLogin,
  IQuestions,
  IAnswers,
  IPropsRound,
} from "./types";

export const PlayerContext = createContext<IUser>({} as IUser);

const URL = "https://test-quiz-app-backend.herokuapp.com";

export const PlayerProvider = ({ children }: IProvider) => {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState<string | null | undefined>("");
  const [question, setQuestions] = useState<IQuestions[]>([]);
  const [points, setPoints] = useState(0);
  const [round, setRound] = useState(1);
  const [totalRounds, setTotalRounds] = useState(0);
  const [matchId, setMatchId] = useState(0);

  const Login = async ({ username, category }: IUserLogin) => {
    setUsername(username);

    const playerInfo = {
      round: {
        player_name: username,
        category_id: category,
      },
    };
    const result = await fetch(`${URL}/rounds`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(playerInfo),
    });
    if (!result.ok) {
      alert("Erro ao logar !");
    }

    const { round }: IPropsRound = await result.json();
    setQuestions(round.questions);
    setTotalRounds(round.questions.length);
    setMatchId(round.id);
    setIsLogged(true);
  };

  const calculatePoints = async (round: number, answers: IAnswers) => {
    setRound(round + 1);
    if (answers.correct) {
      setPoints(points + 10);
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        Login,
        username: username!,
        points,
        isLogged,
        questions: question,
        URL,
        calculatePoints,
        round,
        totalRounds,
        matchId,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
