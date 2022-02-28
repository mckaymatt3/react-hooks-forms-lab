import React, {useState} from "react";

function ItemForm({onHandleFormSubmit}) {
  const [newItemUser, setNewItemUser] = useState("Lettuce")
  const [newCategoryUser, setNewCategoryUser] = useState("Produce")

  function handleNewItem(event) {
    setNewItemUser(event.target.value)
  }

  function handleNewItemCategory(event) {
    setNewCategoryUser(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    onHandleFormSubmit({
      id: newItemUser,
      name: newItemUser,
      category: newCategoryUser, 
    })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItemUser} onChange={handleNewItem} />
      </label>

      <label>
        Category:
        <select name="category" value={newCategoryUser} onChange={handleNewItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
