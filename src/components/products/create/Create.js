import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [EnteredTitle, setTitle] = useState("");
  const [EnteredDescription, setDescription] = useState("");
  const [EnteredPrice, setPrice] = useState("");
  const [EnteredImage, setImage] = useState("");

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function descriptionChangeHandler(event) {
    setDescription(event.target.value);
  }

  function priceChangeHandler(event) {
    setPrice(event.target.value);
  }

  function imageChangeHandler(event) {
    setImage(event.target.files[0]);
  }

  function submitHandler(event) {
    event.preventDefault();

    axios
      .post("http://localhost:1337/buy-products", {
        Title: EnteredTitle,
        Description: EnteredDescription,
        Price: EnteredPrice,
      })
      .then((response) => {
        console.log(response.data);

        const data = new FormData();

        data.append("files", EnteredImage);
        data.append("ref", "buy-products");
        data.append("refId", response.data.id);
        data.append("field", "Image");

        axios
          .post("http://localhost:1337/upload", data)
          .then((Image) => console.log(Image))
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={EnteredTitle}
          onChange={titleChangeHandler}
          placeholder="Title"
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={EnteredDescription}
          onChange={descriptionChangeHandler}
          placeholder="Description"
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={EnteredPrice}
          onChange={priceChangeHandler}
          placeholder="Price"
        />
        <label>Image</label>
        <input
          type="file"
          name="file"
          onChange={imageChangeHandler}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Create;
