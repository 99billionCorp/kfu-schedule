import React from "react";
import InputText from "../inputs/InputText";
import Button from "@material-ui/core/Button";

export default function CreateStructuralUnit() {
  return (
    <div>
      <div className="card admin__card">
        <b className="card__header margin-bottom-medium">
          Создание структурного подразделения
        </b>
        <InputText desc="Адрес" placeholder="Начните вводить текст..." />
        <InputText desc="Название" placeholder="Начните вводить текст..." />
        <InputText desc="Описание" placeholder="Начните вводить текст..." />
        <Button variant="contained">Сохранить</Button>
      </div>
    </div>
  );
}
