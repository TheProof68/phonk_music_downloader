document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const tracks = document.querySelectorAll('.track-card');
    tracks.forEach(track => {
        const title = track.querySelector('h2').textContent.toLowerCase();
        track.style.display = title.includes(query) ? 'block' : 'none';
    });
});
