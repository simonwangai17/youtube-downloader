function fetchCategory(category) {
    // You can implement this function to fetch videos based on category
    // For demonstration purposes, let's assume it alerts the selected category
    alert("Fetching videos for category: " + category);
}

function fetchTrendingVideos() {
    // You can implement this function to fetch trending videos
    // For demonstration purposes, let's assume it alerts about fetching trending videos
    alert("Fetching trending videos...");
}

function fetchVideoInfo() {
    // You can implement this function to fetch video info from the provided URL
    // For demonstration purposes, let's assume it fetches and displays the video info
    var videoUrl = document.getElementById('videoUrl').value;
    var videoInfoContainer = document.getElementById('videoInfo');
    videoInfoContainer.innerHTML = "<p>Video URL: " + videoUrl + "</p>";
}

function startDownload() {
    // You can implement this function to start the download using IDM or any other method
    // For demonstration purposes, let's assume it alerts a message
    alert("Download started with IDM!");
}
