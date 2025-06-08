const songs = [
  {title:"Manike Mage Hithe", audio:"music_sinhala1.mp3", video:"https://www.youtube.com/embed/PgCliOxl41o", thumb:"https://img.youtube.com/vi/PgCliOxl41o/maxresdefault.jpg"},
  {title:"Manda Pama", audio:"music_sinhala2.mp3", video:"https://www.youtube.com/embed/UmariaHash", thumb:"https://img.youtube.com/vi/UmariaHash/maxresdefault.jpg"},
  {title:"Kaavaalaa", audio:"music_tamil1.mp3", video:"https://www.youtube.com/embed/KaavaalaaID", thumb:"https://img.youtube.com/vi/KaavaalaaID/maxresdefault.jpg"},
  {title:"Shape of You", audio:"music_english1.mp3", video:"https://www.youtube.com/embed/JGwWNGJdvx8", thumb:"https://img.youtube.com/vi/JGwWNGJdvx8/maxresdefault.jpg"},
  {title:"Hindi Love", audio:"music_hindi1.mp3", video:"https://www.youtube.com/embed/60ItHLz5WEA", thumb:"https://img.youtube.com/vi/60ItHLz5WEA/maxresdefault.jpg"},
  {title:"Subani", audio:"music_subani.mp3", video:"https://www.youtube.com/embed/qWqmGqOwXjE", thumb:"https://img.youtube.com/vi/qWqmGqOwXjE/maxresdefault.jpg"},
  {title:"Asuran BGM", audio:"music_asuran.mp3", video:"https://www.youtube.com/embed/Ausran123", thumb:"https://img.youtube.com/vi/Ausran123/maxresdefault.jpg"},
  {title:"Alone - Alan Walker", audio:"music_alone.mp3", video:"https://www.youtube.com/embed/1-xGerv5FOk", thumb:"https://img.youtube.com/vi/1-xGerv5FOk/maxresdefault.jpg"},
  {title:"Believer", audio:"music_believer.mp3", video:"https://www.youtube.com/embed/7wtfhZwyrcc", thumb:"https://img.youtube.com/vi/7wtfhZwyrcc/maxresdefault.jpg"},
  {title:"Senorita", audio:"music_senorita.mp3", video:"https://www.youtube.com/embed/Pkh8UtuejGw", thumb:"https://img.youtube.com/vi/Pkh8UtuejGw/maxresdefault.jpg"},
  {title:"Perfect", audio:"music_perfect.mp3", video:"https://www.youtube.com/embed/2Vv-BfVoq4g", thumb:"https://img.youtube.com/vi/2Vv-BfVoq4g/maxresdefault.jpg"},
  {title:"Pasoori", audio:"music_pasoori.mp3", video:"https://www.youtube.com/embed/5Eqb_-j3FDA", thumb:"https://img.youtube.com/vi/5Eqb_-j3FDA/maxresdefault.jpg"},
  {title:"Despacito", audio:"music_despacito.mp3", video:"https://www.youtube.com/embed/kJQP7kiw5Fk", thumb:"https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg"},
  {title:"Yohani - Moving On", audio:"music_yohani.mp3", video:"https://www.youtube.com/embed/BQn8wC1M9BU", thumb:"https://img.youtube.com/vi/BQn8wC1M9BU/maxresdefault.jpg"},
  {title:"Dance Monkey", audio:"music_dance_monkey.mp3", video:"https://www.youtube.com/embed/q0hyYWKXF0Q", thumb:"https://img.youtube.com/vi/q0hyYWKXF0Q/maxresdefault.jpg"},
];

let idx = 0;
let visibleCount = 15;
let currentFilter = "";

const audio = document.getElementById("audioPlayer");
const video = document.getElementById("videoPlayer");
const thumb = document.getElementById("thumbnail");

function loadSong(i){
  idx = i;
  const s = songs[i];
  audio.src = s.audio;
  thumb.src = s.thumb;
  video.src = s.video;
  video.hidden = true;
  audio.play();
}

function play() { audio.play(); }
function pause(){ audio.pause(); }
function skip() { loadSong((idx+1)%songs.length); }
audio.onended = skip;

thumb.onclick = () => {
  video.hidden = !video.hidden;
}

function updateSuggestions(){
  currentFilter = document.getElementById("searchInput").value.toLowerCase();
  visibleCount = 15;
  renderSuggestions();
}

function renderSuggestions(){
  const container = document.getElementById("suggestionsContainer");
  container.innerHTML = '';
  const filtered = songs.filter(s => s.title.toLowerCase().includes(currentFilter));
  filtered.slice(0, visibleCount).forEach((s, i) => {
    const div = document.createElement('div');
    div.textContent = s.title;
    div.onclick = () => loadSong(songs.indexOf(s));
    container.appendChild(div);
  });
  document.querySelector(".more-btn").style.display = (visibleCount < filtered.length) ? "block" : "none";
}

function showMore(){
  visibleCount += 15;
  renderSuggestions();
}

window.onload = () => {
  loadSong(0);
  updateSuggestions();
};
