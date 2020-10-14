import React from "react";
import InputText from "../inputs/InputText";
import InputFile from "../inputs/InputFile";
import { Button } from "@material-ui/core";

export default function CreatePrepod() {
  return (
    <div className="card admin__card">
      <b className="card__header margin-bottom-medium">Создание препода</b>
      <InputText desc="ФИО" placeholder="Начните вводить текст..." />
      <InputFile desc="Фото" />
      <Button variant="contained">Сохранить</Button>
    </div>
  );
}
