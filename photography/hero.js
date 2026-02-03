function rand(n, timeSeed = null) {
  const time = timeSeed ? new Date(timeSeed) : new Date();
  let seed = time.getTime() % 0xffffffff;
  seed = (0x015a4e35 * seed) % 0x7fffffff;
  return (seed >> 16) % n;
}

const heroImages = [
    {
        "src": "/images/photography/sports/IMG_0465.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 1"
    },
    {
        "src": "/images/photography/sports/IMG_0629.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 2"
    },
    {
        "src": "/images/photography/sports/IMG_9758.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 3"
    },
    {
        "src": "/images/photography/sports/IMG_9769.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 4"
    },
    {
        "src": "/images/photography/sports/IMG_9854.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 1"
    },
    {
        "src": "/images/photography/sports/IMG_4662.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 2"
    },
    {
        "src": "/images/photography/sports/IMG_4692.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 3"
    },
    {
        "src": "/images/photography/sports/IMG_4772.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 4"
    }
    ,{
        "src": "/images/photography/sports/IMG_4901.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 1"
    },
    {
        "src": "/images/photography/sports/IMG_4991.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 2"
    },
    {
        "src": "/images/photography/sports/IMG_5008.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 3"
    },
    {
        "src": "/images/photography/sports/IMG_5076.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 4"
    },
    {
        "src": "/images/photography/sports/IMG_5197.JPG",
        "alt": "man catching frisbee",
        "caption": "Image 2"
    }
]
const random = rand(heroImages.length);
const randomImage = heroImages[random];
console.log(heroImages[random]);
const randomContainer = document.getElementById("photography_hero");
randomContainer.style.backgroundImage = "url('" + randomImage.src + "')";
console.log(randomContainer);