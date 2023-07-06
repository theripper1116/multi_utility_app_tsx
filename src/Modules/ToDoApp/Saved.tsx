import React, { useEffect } from "react";

function Saved(props) {
  const deleteDocData = () => {
    // props.receiveDocData(()=>{
    //   return [{
    //     id: "",
    //     actionName: "Delete"
    //   }];
    // });
  }
  const archiveDocData = () => {};
  useEffect(() => {
    console.log(props.toDoAppData);
  }, [props.toDoAppData]);

  return (
    <>
      <div className="container">
        {props?.state?.map((element, index) => {
          return (
            <div
              className="container"
              key={element.id}
              style={{ marginTop: 200 }}
            >
              <div className="card">
                <div className="card-body">
                  <p className="card-title">Saved Doc {index + 1}</p>
                  <h3 className="card-text">{element.data}</h3>
                  <footer className="blockquote-footer my-4">
                    {element.modifiedDate}
                  </footer>
                  <button className="btn btn-dark" onClick={deleteDocData}>
                    Delete
                  </button>                 
                  <button
                    className="btn btn-dark mx-2"
                    onClick={archiveDocData}
                  >
                    Archive
                  </button>
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
