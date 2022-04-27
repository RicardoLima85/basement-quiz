import { useContext } from "react";
import { Header } from "./style";
import { PlayerContext } from "../../Provider/Player";
import { IPropsHeader } from "./types";

const CHeader = ({ title }: IPropsHeader) => {
  const { username, isLogged, totalRounds, round } = useContext(PlayerContext);
  return (
    <Header>
      {isLogged && totalRounds !== round && (
        <section>
          <span> {username} </span>
          <div>
            <span> Pergunta: </span>
            <span>
              {" "}
              {round} de {totalRounds}
            </span>
          </div>
        </section>
      )}
      {totalRounds === round && isLogged && <h2> {title} </h2>}
      {totalRounds !== round && isLogged ? (
        <span> {title} </span>
      ) : (
        !isLogged && <h2> {title} </h2>
      )}
    </Header>
  );
};

export default CHeader;
