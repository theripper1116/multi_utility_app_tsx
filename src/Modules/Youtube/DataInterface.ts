interface YoutubeData {
    "kind": string,
    "etag": string,
    "items": [
        {
            "kind": "youtube#video",
            "etag": string,
            "id": string,
            "snippet": {
                "publishedAt": string,
                "channelId": string,
                "title": string,
                "description": string,
                "thumbnails": {
                    (key): {
                        "url": string,
                        "width": number,
                        "height": number
                    }
                },
                "channelTitle": string,
                "tags": [
                    string
                ],
                "categoryId": string,
                "liveBroadcastContent": string,
                "defaultLanguage": string,
                "localized": {
                    "title": string,
                    "description": string
                },
                "defaultAudioLanguage": string
            },
        }
    ]
    "nextPageToken": string,
    "prevPageToken": string,
    "pageInfo": {
        "totalResults": number,
        "resultsPerPage": number
    }
}

export default YoutubeData;