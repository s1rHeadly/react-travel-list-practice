import React from "react";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";

const Header = ({
  onhandleDescription,
  onSubmitForm,
  input,
  onGetQuantity,
  quantity,
  title,
  onHandleCheck
}) => {
  return (
    <>
      <h1>🏝️ Far Away 🧳</h1>
      <form className="add-form" onSubmit={onSubmitForm}>
        <h3>{title}</h3>

        <Select
        value={quantity}
        amount={10}
        onChange={onGetQuantity} />
        
        <Input
        placeholder="Add an item..."
        onChange={onhandleDescription} value={input} />
        <Button>Add Item</Button>
      </form>
    </>
  );
};

export default Header;
