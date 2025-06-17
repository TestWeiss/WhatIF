function showVideo(videoId) {
  const video1 = document.getElementById('video1');
  const video2 = document.getElementById('video2');

  [video1, video2].forEach(video => {
    video.pause();
    video.style.display = 'none';
    video.currentTime = 0; 
  });

  const selectedVideo = document.getElementById(videoId);
  if (selectedVideo) {
    selectedVideo.style.display = 'block';
    selectedVideo.play();
  }
}
