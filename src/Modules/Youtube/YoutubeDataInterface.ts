interface YoutubeData {
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

export default YoutubeData;