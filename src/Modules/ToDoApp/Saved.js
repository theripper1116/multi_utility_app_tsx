import React, { useEffect } from "react";

function Saved(props) {
  useEffect(() => {
    console.log(props.toDoAppData.length);
  }, [props.toDoAppData]);

  return (
    <>
      <div className="container" style={{ marginTop: 100 }}>
        {props?.toDoAppData?.map((element) => {
          <div
            className="container"
            key={element.id}
            style={{ marginTop: 200 }}
          >
            {element.data}
          </div>;
        })}
      </div>
    </>
  );
}

export default Saved;
