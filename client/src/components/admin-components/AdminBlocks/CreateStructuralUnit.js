import React, { useState } from "react";
import InputText from "../inputs/InputText";
import Button from "@material-ui/core/Button";

export default function CreateStructuralUnit() {
  const [adress, setAdress] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const submit = () => {
    return {
      adress,
      name,
      desc,
    };
  };
  return (
    <div>
      <div className="card admin__card">
        <b className="card__header margin-bottom-medium">
          Создание структурного подразделения
        </b>
        <InputText
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          desc="Адрес"
          placeholder="Начните вводить текст..."
        />
        <InputText
          vlaue={name}
          onChange={(e) => setName(e.target.value)}
          desc="Название"
          placeholder="Начните вводить текст..."
        />
        <InputText
          vlaue={desc}
          onChange={(e) => setDesc(e.target.value)}
          desc="Описание"
          placeholder="Начните вводить текст..."
        />
        <Button onClick={submit} variant="contained">
          Сохранить
        </Button>
      </div>
    </div>
  );
}
