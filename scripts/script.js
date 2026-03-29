const webImagePaths = [
  {
    name: "Art Showcase",
    src: "./assets/images/art.rojen.name.np_.webp",
		href: "https://art.rojen.name.np",
  },
	{
		name: "Portfolio",
		src: "./assets/images/me.rojen.name.np_.webp",
		href: "https://me.rojen.name.np",
	},
	{
		name: "Kabir Khaja Ghar",
		src: "./assets/images/kabirkhajaghar.netlify.app_.webp",
		href: "https://kabirkhajaghar.netlify.app",
	},
	{
		name: "Interior Point Nepal",
		src: "./assets/images/interiorpointnepal.netlify.app_.webp",
		href: "https://interiorpointnepal.netlify.app",
	},
	{
		name: "Image Editor",
		src: "./assets/images/rojens-tools.netlify.app_.webp",
		href: "https://rojen-tools.netlify.app",
	},
	{
		name: "Adopt Dogs",
		src: "./assets/images/dogsadopt.netlify.app_.webp",
		href: "https://dogsadopt.netlify.app",
	},
	{
		name: "Travelone",
		src: "./assets/images/travelone.webp",
		href: "https://travelone-home.vercel.app",
	},
	{
		name: "Smoothie Juicy",
		src: "./assets/images/smoothiejuicy.webp",
		href: "https://smoothiejuicy.netlify.app",
	},
	{
		name: "Swap Head",
		src: "./assets/images/swaphead.webp",
		href: "https://swapheads.netlify.app",
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
    imageSrc: "./assets/games/daydream parkour.webp",
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
    src: "assets/drawings/IMG_20240630_214615.webp",
  },
	{
		name: "Simha",
		src: "assets/drawings/IMG_20240630_214653.webp",
	},
	{
		name: "Gwen",
		src: "assets/drawings/IMG_20240630_214748.webp",
	},
	{
		name: "snake in hand",
		src: "assets/drawings/IMG_20240630_214813.webp",
	},
	{
		name: "Miles Moralers and Gwen",
		src: "assets/drawings/IMG_20240630_214832.webp",
	},
	{
		name: "Plague Doctor",
		src: "assets/drawings/IMG_20240706_131814.webp",
	},
	{
		name: "Ganesh",
		src: "assets/drawings/IMG_20240831_001136.webp",
	},
	{
		name: "Auggie from Wonder movie",
		src: "assets/drawings/IMG_20240831_151334.webp",
	},
	{
		name: "Shiva and Parvati",
		src: "assets/drawings/IMG_20240908_000143.webp",
	},
	{
		name: "She",
		src: "assets/drawings/IMG_20240909_080202_0797.webp",
	},
	{
		name: "Iron man",
		src: "assets/drawings/IMG_20240910_092815.webp",
	},
	{
		name: "She",
		src: "assets/drawings/IMG_20240912_211624.webp",
	},
	{
		name: "She",
		src: "assets/drawings/IMG_20240915_040404.webp",
	},
	{
		name: "Holding Flower",
		src: "assets/drawings/IMG_20240919_191839.webp",
	},
	{
		name: "Woman",
		src: "assets/drawings/IMG_20240925_164529.webp",
	},
	{
		name: "Mermaid",
		src: "assets/drawings/IMG_20240926_172003.webp",
	},
	{
		name: "love",
		src: "assets/drawings/IMG_20240930_225957.webp",
	},
	{
		name: "She",
		src: "assets/drawings/IMG_20241004_043339.webp",
	},
	{
		name: "Angel",
		src: "assets/drawings/IMG_20241016_073254.webp",
	},
	{
		name: "Couple",
		src: "assets/drawings/IMG_20241018_164220.webp",
	},
	{
		name: "Hijabi",
		src: "assets/drawings/IMG_20241019_212711.webp",
	},
	{
		name: "Jhumka",
		src: "assets/drawings/IMG_20241023_010557.webp",
	},
	{
		name: "She",
		src: "assets/drawings/IMG_20241027_001614.webp",
	},
	{
		name: "She",
		src: "assets/drawings/IMG_20241027_001828.webp",
	},
	{
		name: "She",
		src: "assets/drawings/IMG_20241110_175428.webp",
	},
	{
		name: "Pain",
		src: "assets/drawings/IMG_20241201_222338.webp",
	},
	{
		name: "Missing",
		src: "assets/drawings/IMG_20250108_000719.webp",
	},
	{
		name: "She",
		src: "assets/drawings/IMG20240910230954.webp",
	},
	{
		name: "She",
		src: "assets/drawings/IMG20240928004456.webp",
	},
	{
		name: "Lovers",
		src: "assets/drawings/IMG20241006023303_01.webp",
	},
	{
		name: "Sitting on the moon",
		src: "assets/drawings/IMG20241008214148.webp",
	},
	{
		name: "Waiting",
		src: "assets/drawings/IMG20241105000254_01.webp",
	},
	{
		name: "Anime Girl",
		src: "assets/drawings/IMG20241130002637_01.webp",
	},
	{
		name: "Skeleton crowning girl",
		src: "assets/drawings/IMG20241225233008_01.webp",
	},
	{
		name: "Couple dancing",
		src: "assets/drawings/IMG20250114001848.webp",
	},
	{
		name: "She",
		src: "assets/drawings/IMG20250712025422.webp",
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