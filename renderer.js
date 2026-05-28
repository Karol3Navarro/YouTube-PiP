window.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('close-btn');
  const minBtn = document.getElementById('min-btn');
  const webview = document.getElementById('video-frame');

  closeBtn.addEventListener('click', () => {
    window.electronAPI.sendControl('close');
  });

  minBtn.addEventListener('click', () => {
    window.electronAPI.sendControl('minimize');
  });

  webview.src = 'https://www.youtube.com';
});