import React from "react";

function CheckComponet({ text }) {
  return (
    <div>
      <div class="checkComponent">
        <i class="fas fa-check"></i>
        <span class="checkComponentText">{text} </span>
      </div>
    </div>
  );
}

export default CheckComponet;
