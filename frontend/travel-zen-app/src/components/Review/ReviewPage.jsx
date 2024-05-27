import React from "react";

export default function ReviewPage({ content, editFunc, deleteFunc }) {
  return (
    <>
      <div className="reviewDisplay">
        <h1>{content.name}</h1>
        <p>{content.description}</p>

        <div className="btnContainer">
          <button
            onClick={() => {
              editFunc(content);
            }}
          >
            {" "}
            Update{" "}
          </button>

          <button
            onClick={() => {
              deleteFunc(content._id);
            }}
          >
            {" "}
            Delete{" "}
          </button>
        </div>
      </div>
    </>
  );
}

