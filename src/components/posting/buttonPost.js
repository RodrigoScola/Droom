import React from "react";

export default function buttonPost() {
  return (
    <div className="pt-1">
      <form>
        <div className="p-4">
          <input
            className="form-control"
            placeholder="qual é o título da música?"
            required
          />
        </div>
        <div>
          <button className="btn btn-block btn-success">Submit</button>
        </div>
      </form>
    </div>
  );
}
