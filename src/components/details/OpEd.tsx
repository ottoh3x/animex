import React from "react";

function OpEd({ opening_themes, ending_themes } : any) {
  return (
    <div className="p-4">
      <div>
        <h1 className="py-2 text-blue-500">Opening Themes:</h1>

        {opening_themes?.map((a: any, i: number) => (
          <div key={i}>
            <span>{a}</span>
          </div>
        ))}
      </div>
      <div>
        <h1 className="py-2 text-blue-500">Ending Themes:</h1>

        {ending_themes?.map((a: any, i: number) => (
          <div key={i}>
            <span>{a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OpEd;
