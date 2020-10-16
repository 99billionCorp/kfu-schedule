import React, { useState } from "react";
import InputText from "../inputs/InputText";
import Button from "@material-ui/core/Button";

export default function CreatePrepodSub() {
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");
  const submit = () => {
    return {
      header,
      text,
    };
  };

  return (
    <form onSubmit={submit}>
      <div className="card admin__card">
        <InputText
          value={header}
          onChange={(e) => {
            setHeader(e.target.value);
          }}
          desc="Заголовок"
          placeholder="Начните вводить текст..."
        />
        <InputText
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          desc="Содержание"
          placeholder="Начните вводить текст..."
        />
        <Button variant="contained">Сохранить</Button>
      </div>
    </form>
  );
}
