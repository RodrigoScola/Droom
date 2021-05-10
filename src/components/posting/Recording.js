import React from "react";

export default function Recording() {
  return (
    <div>
        <button className='mt-1 ml-1 btn btn-success'>
      <i class="bi bi-stop-circle"></i>  Start Recording</button>        
      <button className='mt-1 ml-1 btn btn-info'>
      <i class="bi bi-stop-circle"></i>  Stop Recording</button>
      <button className='mt-1 ml-1 btn btn-warning'>
      <i class="bi bi-download"></i>  Download Song</button>
    </div>
  );
}
