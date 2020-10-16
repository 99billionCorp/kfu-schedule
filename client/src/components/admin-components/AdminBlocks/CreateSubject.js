import React, { useState } from "react";
import InputText from "../inputs/InputText";
import Button from "@material-ui/core/Button";

export default function CreateSubject() {
  const [name, setName] = useState("");
  const submit = () => {
    return {
      name,
    };
  };
  return (
    <div>
      <div className="card admin__card">
        <b className="card__header margin-bottom-medium">Создание предмета</b>
        <InputText
          desc="Название"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Начните вводить текст..."
        />
        <Button onClick={submit} variant="contained">
          Сохранить
        </Button>
      </div>
    </div>
  );
}
