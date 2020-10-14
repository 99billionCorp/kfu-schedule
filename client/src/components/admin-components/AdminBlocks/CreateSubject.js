import React from "react";
import InputText from "../inputs/InputText";
import Button from "@material-ui/core/Button";

export default function CreateSubject() {
  return (
    <div>
      <div className="card admin__card">
        <b className="card__header margin-bottom-medium">Создание предмета</b>
        <InputText desc="Название" placeholder="Начните вводить текст..." />
        <Button variant="contained">Сохранить</Button>
      </div>
    </div>
  );
}
