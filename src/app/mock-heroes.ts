import { Hero } from './hero';

const generateHeroes = (amount: number) => {
  const heroes: Hero[] = [];

  for (let i = 0; i < amount; i++) {
    heroes.push({ id: i, name: `Hero #${i + 1}` });
  }

  return heroes;
};

export const HEROES: Hero[] = generateHeroes(10);
