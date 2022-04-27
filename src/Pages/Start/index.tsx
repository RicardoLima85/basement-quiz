import { SectionStart, Form } from "./style";
import { Button, Input, Select } from "../../Components/styles";
import Header from "../../Components/Header";
import { PlayerContext } from "../../Provider/Player";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ICategories, IUserLogin } from "./types";

const Start = () => {
  const { Login, URL } = useContext(PlayerContext);
  const [username, setUsername] = useState<string | undefined>("");
  const [category, setCategory] = useState<string | undefined>("");
  const [categories, setCategorie] = useState<ICategories[]>();

  const navigate = useNavigate();

  const handleLogin = ({ event }: IUserLogin) => {
    event.preventDefault();
    const user = {
      username,
      category,
    };
    Login(user);
    navigate("/play");
  };

  const fetchCategory = async () => {
    const result = await fetch(`${URL}/categories`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const { categories } = await result.json();
    setCategorie(categories);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <SectionStart>
      <Header title="Bem vindo ao Quiz App !" />
      <Form onSubmit={(ev) => handleLogin({ event: ev })}>
        <Input
          type="text"
          placeholder="Digite seu nome"
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <Select onChange={(ev) => setCategory(ev.target.value)}>
          <option value="categorie">Selecione a categoria</option>
          {categories?.map((values) => {
            return (
              <option key={values.id} value={values.id}>
                {" "}
                {values.name}{" "}
              </option>
            );
          })}
        </Select>
        <Button type="submit"> Começar </Button>
      </Form>
    </SectionStart>
  );
};

export default Start;
