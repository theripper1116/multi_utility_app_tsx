import React, { useEffect } from "react";

function Saved(props) {
  useEffect(() => {
    console.log(props.toDoAppData);
  }, [props.toDoAppData]);

  return (
    <>
      <div className="container">
        {props?.toDoAppData?.map((element, index) => {
          return (
            <div
              className="container"
              key={element.id}
              style={{ marginTop: 200 }}
            >
              <div className="card">
                <div className="card-body">
                  <p className="card-title">Saved Doc {index+1}</p>
                  <h3 className="card-text">
                    {element.data}
                  </h3>
                  <footer className="blockquote-footer my-4">{element.modifiedDate}</footer>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Saved;
