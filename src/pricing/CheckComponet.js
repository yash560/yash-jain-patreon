import React from "react";

function CheckComponet({ text ,iconC}) {
  return (
    <div>
      <div class="checkComponent">
        <i class={iconC}></i>
        <span class="checkComponentText">{text} </span>
      </div>
    </div>
  );
}

export default CheckComponet;
