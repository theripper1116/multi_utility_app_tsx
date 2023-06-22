import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

import DisplayYoutubeData from "./DisplayYoutubeData";
import Spinner from "./Spinner";

function FetchYoutubeData() {
  const [pageToken, changePageToken] = useState({});
  const [youtubeData, changeYoutubeData] = useState([]);
  const [url, changeURL] = useState(
    `https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&type=video&part=snippet&maxResults=20`
  );
  const [trackSpinner, changeSpinner] = useState(false);
  const fetchData = useCallback(async () => {
    try {
      let fetchedData = await axios.get(url);
      changePageToken(fetchedData.data);
      changeYoutubeData(fetchedData.data.items);
    } catch (error) {
      console.log(error.message);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePrevPage = () => {
    changeSpinner(true);
    changeURL(url.concat(`&pageToken=${pageToken.prevPageToken}`));
    changePageToken({});
    changeYoutubeData([]);
    setTimeout(() => {
      fetchData();
    }, 1000);
    changeSpinner(false);
  };
  const handleNextPage = () => {
    changeSpinner(true);
    changeURL(url.concat(`&pageToken=${pageToken.nextPageToken}`));
    changePageToken({});
    changeYoutubeData([]);
    setTimeout(() => {
      fetchData();
    }, 1000);
    changeSpinner(false);
  };
  return (
    <>
      {trackSpinner && <Spinner />}
      {youtubeData?.map((element) => {
        return (
          <>
            <div className="row" key={element.id}>
              <div className="col-md-3" key={element.id}>
                <DisplayYoutubeData
                  element={element}
                  trackSpinner={trackSpinner}
                />
              </div>
            </div>
          </>
        );
      })}
      <button className="btn btn-dark mx-2" onClick={handlePrevPage}>
        Previous Page
      </button>
      <button className="btn btn-dark mx-2 text-right" onClick={handleNextPage}>
        Next Page
      </button>
    </>
  );
}

export default FetchYoutubeData;
