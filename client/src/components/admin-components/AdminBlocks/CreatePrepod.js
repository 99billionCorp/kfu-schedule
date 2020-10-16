import React, { useState } from "react";
import InputText from "../inputs/InputText";
import InputFile from "../inputs/InputFile";
import { Button } from "@material-ui/core";
import CreatePrepodSub from "./CreatePrepodSub";
import uuid from "react-uuid";

export default function CreatePrepod() {
  const [fio, setFio] = useState("");
  const [subBlocksCount, setSubBlocksCount] = useState(0);

  const submit = () => {
    return {
      fio,
    };
  };

  return (
    <>
      <form onSubmit={submit} className="card admin__card">
        <b className="card__header margin-bottom-medium">Создание препода</b>
        <InputText
          value={fio}
          onChange={(e) => setFio(e.target.value)}
          desc="ФИО"
          placeholder="Начните вводить текст..."
        />
        <InputFile desc="Фото" />
        <Button variant="contained" onClick={() => {}}>
          Добавить блок информации
        </Button>
        <Button variant="contained">Сохранить</Button>
      </form>
    </>
  );
}
