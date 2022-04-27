import { SectionStart, Form, FormGroup } from "./style";
import { Button, Input, Checkbox } from "../../Components/styles";
import Header from "../../Components/Header";
import { useContext, useState, FormEvent } from "react";
import { PlayerContext } from "../../Provider/Player";
import { useNavigate } from "react-router-dom";
import { IOptions } from "./types";

const Start = () => {
  const navigate = useNavigate();
  const { questions, calculatePoints, URL, matchId, points, round } =
    useContext(PlayerContext);
  const [matchRound, setmatchRound] = useState(round);
  const [isChecked, setIsChecked] = useState<IOptions[]>([]);

  const isEndGame = matchRound === questions.length;

  const nextRound = async (event: FormEvent) => {
    event.preventDefault();
    setmatchRound(matchRound + 1);

    const questionResponse = {
      answer: {
        question_id: questions[matchRound]?.id,
        option_id: isChecked[0].id,
      },
    };
    const result = await fetch(`${URL}/rounds/${matchId}/answers`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(questionResponse),
    });
    const { answer } = await result.json();
    calculatePoints(matchRound, answer);
  };

  const handleRound = (value: IOptions) => {
    setIsChecked([value]);
  };

  const redirectToNewGame = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <SectionStart>
      <Header
        title={
          isEndGame && points > 0
            ? `Você fez ${points} pontos 🎉️`
            : points === 0 && isEndGame
            ? `Você fez ${points} pontos 😢️`
            : questions[matchRound]?.description
        }
      />
      <Form
        onSubmit={(ev) => (isEndGame ? redirectToNewGame() : nextRound(ev))}
      >
        {questions[matchRound]?.options?.map((value) => {
          return (
            <FormGroup key={value.id}>
              <Checkbox onClick={() => handleRound(value)}>
                <Input
                  value={value.id}
                  checked={isChecked?.includes(value)}
                  type="checkbox"
                  id={`${value.label}-${value.id}`}
                />
                <label htmlFor={`${value.label}-${value.id}`}>
                  {value.label}
                </label>
              </Checkbox>
            </FormGroup>
          );
        })}
        {isEndGame ? (
          <Button> Reiniciar Quiz </Button>
        ) : (
          <Button> Confirmar </Button>
        )}
      </Form>
    </SectionStart>
  );
};

export default Start;
