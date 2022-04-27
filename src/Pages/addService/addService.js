import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const url = `https://shrouded-beach-15194.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="w-50 mx-auto my-5">
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2 "
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <input
          className="mb-2 "
          placeholder="Price"
          {...register("price", { required: true })}
        />
        <textarea
          className="mb-2 "
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <input
          className="mb-2 "
          placeholder="Image URL"
          {...register("img", { required: true })}
        />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" className="btn btn-primary" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
