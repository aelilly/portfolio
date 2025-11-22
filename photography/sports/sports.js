
function rand(n, timeSeed = null) {
  const time = timeSeed ? new Date(timeSeed) : new Date();
  let seed = time.getTime() % 0xffffffff;
  seed = (0x015a4e35 * seed) % 0x7fffffff;
  return (seed >> 16) % n;
}

const sportsImages = [
    {
        "src": "/images/Photography/Sports/IMG_4662.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 1"
    },
    {
        "src": "/images/Photography/Sports/IMG_4692.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 2"
    },
    {
        "src": "/images/Photography/Sports/IMG_4772.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 3"
    },
    {
        "src": "/images/Photography/Sports/IMG_4901.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 4"
    }
]
const random = rand(sportsImages.length);
const randomImage = sportsImages[random];
console.log(sportsImages[random]);
const randomContainer = document.getElementById("random");
const randomQuery = randomContainer.querySelector("img");
randomQuery.src = randomImage.src;
randomQuery.alt = randomImage.alt;
randomContainer.querySelector("figcaption").innerText = randomImage.caption;
