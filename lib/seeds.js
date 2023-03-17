const seeds = [
  {
    image: 
    "",
    prompt: "",
  },
];

export function getRandomSeed() {
  return seeds[Math.floor(Math.random() * seeds.length)];
}
