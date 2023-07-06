import React from "react";
import ReactPlayer from "react-player";

function DisplayYoutubeData(props) {
  return (
    <>
      <div className="card" style={{ width: 640 }}>
        {/* <img
          src={props?.element?.snippet?.thumbnails?.high?.url}
          className="card-img-top"
          alt="..."
          style={{ width: 480, height: 360 }}
        /> */}
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${props?.element?.id}`}
            controls={true}
            playIcon={<button>Play</button>}
          />
        <div className="card-body">
          <h4 className="card-title">
            {props?.element?.snippet?.title?.slice(0, 44)}...
          </h4>
          <p className="card-text">
            {props?.element?.snippet?.description?.slice(0, 80)}...
          </p>
          {/* <a
            ReactPlayer url={`https://www.youtube.com/watch?v=${props?.element?.id}`}
            className="btn btn-danger"
            target="_blank"
            rel="noreferrer"
            controls={true}
          >
            Click Here to go to video!
          </a> */}
        </div>
      </div>
    </>
  );
}

export default DisplayYoutubeData;
