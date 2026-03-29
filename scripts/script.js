const webImagePaths = [
  {
    name: "Art Showcase",
    src: "./assets/images/art.rojen.name.np_.png",
		href: "https://art.rojen.name.np",
  },
	{
		name: "Portfolio",
		src: "./assets/images/me.rojen.name.np_.png",
		href: "https://me.rojen.name.np",
	},
	{
		name: "Kabir Khaja Ghar",
		src: "./assets/images/kabirkhajaghar.netlify.app_.png",
		href: "https://kabirkhajaghar.netlify.app",
	},
	{
		name: "Image Editor",
		src: "./assets/images/rojens-tools.netlify.app_.png",
		href: "https://rojen-tools.netlify.app",
	},
	{
		name: "Adopt Dogs",
		src: "./assets/images/dogsadopt.netlify.app_.png",
		href: "https://dogsadopt.netlify.app",
	},
];

const webTrack = document.getElementById('webTrack');
const webContainer = document.getElementById('webContainer');

webImagePaths.forEach(image => {
    webTrack.innerHTML += `
        <article class="work">
					<h4>${image.name}</h4>
          <img src="${image.src}" alt="Art ${image.name}" draggable="false" loading="lazy">
					<a href="${image.href}" target="_blank"><button class="project-btn">view</button></a>
        </article>`;
});

document.getElementById('webNextBtn').onclick = () => {
    webContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
};

document.getElementById('webPrevBtn').onclick = () => {
    webContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
};

const gamesImagePaths = [
  {
    name: "Daydream Parkour",
    imageSrc: "./assets/games/daydream parkour.png",
		href: "https://rojenrandom.itch.io/daydream-parkour",
  },
	{
		name: "Snake Game",
		imageSrc: "./assets/games/snake-game.webp",
		href: "https://rojenrandom.itch.io/snake-game",
	},
];

const gamesTrack = document.getElementById('gamesTrack');
const gamesContainer = document.getElementById('gamesContainer');

gamesImagePaths.forEach(image => {
  gamesTrack.innerHTML += `
    <article class="work">
			<h4>${image.name}</h4>
      <img src="${image.imageSrc}" alt="Art ${image.name}" draggable="false" loading="lazy">
			<a href="${image.href}" target="_blank"><button class="project-btn">play</button></a>
    </article>`;
});

document.getElementById('gamesNextBtn').onclick = () => {
    gamesContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
};

document.getElementById('gamesPrevBtn').onclick = () => {
    gamesContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
};

const drawingImagePaths = [
  {
    name: "Pikchu",
    src: "assets/drawings/IMG_20240630_214615.jpg",
  },
	{
		name: "Simha",
		src: "assets/drawings/IMG_20240630_214653.jpg",
	},
	{
		name: "Gwen",
		src: "assets/drawings/IMG_20240630_214748.jpg",
	},
	{
		name: "snake in hand",
		src: "assets/drawings/IMG_20240630_214813.jpg",
	},
	{
		name: "Miles Moralers and Gwen",
		src: "assets/drawings/IMG_20240630_214832.jpg",
	},
	{
		name: "Plague Doctor",
		src: "assets/drawings/IMG_20240706_131814.jpg",
	},
	{
		name: "Ganesh",
		src: "assets/drawings/IMG_20240831_001136.jpg",
	},
	{
		name: "Auggie from Wonder movie",
		src: "assets/drawings/IMG_20240831_151334.jpg",
	},
	{
		name: "Shiva and Parvati",
		src: "assets/drawings/IMG_20240908_000143.jpg",
	},
	{
		name: "She",
		src: "assets/drawings/IMG_20240909_080202_0797.jpg",
	},
	{
		name: "Iron man",
		src: "assets/drawings/IMG_20240910_092815.jpg",
	},
	{
		name: "She",
		src: "assets/drawings/IMG_20240912_211624.jpg",
	},
	{
		name: "She",
		src: "assets/drawings/IMG_20240915_040404.jpg",
	},
	{
		name: "Holding Flower",
		src: "assets/drawings/IMG_20240919_191839.jpg",
	},
	{
		name: "Woman",
		src: "assets/drawings/IMG_20240925_164529.jpg",
	},
	{
		name: "Mermaid",
		src: "assets/drawings/IMG_20240926_172003.jpg",
	},
	{
		name: "love",
		src: "assets/drawings/IMG_20240930_225957.jpg",
	},
	{
		name: "She",
		src: "assets/drawings/IMG_20241004_043339.jpg",
	},
	{
		name: "Angel",
		src: "assets/drawings/IMG_20241016_073254.jpg",
	},
	{
		name: "Couple",
		src: "assets/drawings/IMG_20241018_164220.jpg",
	},
	{
		name: "Hijabi",
		src: "assets/drawings/IMG_20241019_212711.jpg",
	},
	{
		name: "Jhumka",
		src: "assets/drawings/IMG_20241023_010557.jpg",
	},
	{
		name: "She",
		src: "assets/drawings/IMG_20241027_001614.jpg",
	},
	{
		name: "She",
		src: "assets/drawings/IMG_20241027_001828.jpg",
	},
	{
		name: "She",
		src: "assets/drawings/IMG_20241110_175428.jpg",
	},
	{
		name: "Pain",
		src: "assets/drawings/IMG_20241201_222338.jpg",
	},
	{
		name: "Missing",
		src: "assets/drawings/IMG_20250108_000719.jpg",
	},
	{
		name: "She",
		src: "assets/drawings/IMG20240910230954.jpg",
	},
	{
		name: "She",
		src: "assets/drawings/IMG20240928004456.jpg",
	},
	{
		name: "Lovers",
		src: "assets/drawings/IMG20241006023303_01.jpg",
	},
	{
		name: "Sitting on the moon",
		src: "assets/drawings/IMG20241008214148.jpg",
	},
	{
		name: "Waiting",
		src: "assets/drawings/IMG20241105000254_01.jpg",
	},
	{
		name: "Anime Girl",
		src: "assets/drawings/IMG20241130002637_01.jpg",
	},
	{
		name: "Skeleton crowning girl",
		src: "assets/drawings/IMG20241225233008_01.jpg",
	},
	{
		name: "Couple dancing",
		src: "assets/drawings/IMG20250114001848.jpg",
	},
	{
		name: "She",
		src: "assets/drawings/IMG20250712025422.jpg",
	},
];

const drawingTrack = document.getElementById('drawingTrack');
const drawingsContainer = document.getElementById('drawingsContainer');

drawingImagePaths.forEach(image => {
    drawingTrack.innerHTML += `
        <article class="work">
					<h4>${image.name}</h4>
          <img src="${image.src}" alt="Art ${image.name}" draggable="false" loading="lazy">
        </article>`;
});

const scrollAmount = window.innerWidth * 0.4;

document.getElementById('drawingNextBtn').onclick = () => {
    drawingsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
};

document.getElementById('drawingPrevBtn').onclick = () => {
    drawingsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
};

setTimeout(() => {
	ScrollTrigger.refresh();
}, 100);