import { useState } from "react";
import Button from "./common/Button";

const AddPetitionForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  const availableTags = [
    "Environment",
    "Human Rights",
    "Health",
    "Politics",
    "Education",
  ];

  const handleTagSelection = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((t) => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic goes here
    console.log({ title, description, tags });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="my-20 p-8 bg-white shadow-lg rounded-xl max-w-lg w-full">
        <h2 className="text-4xl font-bold  text-center mb-10">
          Add a Petition
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-10">
            <label
              htmlFor="title"
              className="block text-lg font-bold text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter petition title"
              required
            />
          </div>
          <div className="mb-10">
            <label
              htmlFor="description"
              className="block text-lg font-bold text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Describe the petition"
              rows="4"
              required
            />
          </div>
          <div className="mb-14">
            <label className="block text-lg font-bold text-gray-700">
              Tags
            </label>
            <div className="mt-2">
              {availableTags.map((tag, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleTagSelection(tag)}
                  className={`mr-2 mb-2 px-3 py-1 border rounded ${
                    tags.includes(tag)
                      ? "bg-blue-500 text-white"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <Button
            handleOnClick={handleSubmit}
            buttonText={"Submit Petition"}
            css={
              "bg-blue-500  text-white text-lg py-3 px-4 rounded-md hover:bg-blue-600 w-full shadow-lg transition duration-150 ease-in-out"
            }
          />
        </form>
      </div>
    </div>
  );
};

export default AddPetitionForm;
