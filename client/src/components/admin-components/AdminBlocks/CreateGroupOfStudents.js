import React from "react";
import InputText from "../inputs/InputText";
import Button from "@material-ui/core/Button";

export default function CreateGroupOfStudents() {
  return (
    <div>
      <div className="card admin__card">
        <b className="card__header margin-bottom-medium">
          Создание группы студентов
        </b>
        <InputText desc="Номер группы" placeholder="Начните вводить текст..." />
        <InputText
          desc="Направление подготовки"
          placeholder="Начните вводить текст..."
        />
        <Button variant="contained">Сохранить</Button>
      </div>
    </div>
  );
}
