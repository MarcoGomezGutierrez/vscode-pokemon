import { POKEMON_DATA } from '../common/pokemon-data';
import { PokemonColor, PokemonConfig, PokemonGeneration, PokemonSize } from '../common/types';
import { BasePokemonType } from './base-pokemon-type';
import { States } from './states';


export class Pokemon extends BasePokemonType {
  private config: PokemonConfig;

  constructor(
    pokemonType: string,
    spriteElement: HTMLImageElement,
    collisionElement: HTMLDivElement,
    speechElement: HTMLImageElement,
    size: PokemonSize,
    left: number,
    bottom: number,
    pokemonRoot: string,
    floor: number,
    name: string,
    speed: number,
    generation: string,
  ) {
    super(spriteElement, collisionElement, speechElement, size, left, bottom, pokemonRoot, floor, name, speed, generation);

    this.config = POKEMON_DATA[pokemonType] || POKEMON_DATA.bulbasaur;
    this.label = pokemonType;
  }

  static possibleColors = [PokemonColor.default];

  sequence = {
    startingState: States.sitIdle,
    sequenceStates: [
      {
        state: States.sitIdle,
        possibleNextStates: [States.walkLeft, States.walkRight],
      },
      {
        state: States.walkLeft,
        possibleNextStates: [States.sitIdle, States.walkRight],
      },
      {
        state: States.walkRight,
        possibleNextStates: [States.sitIdle, States.walkLeft],
      }
    ],
  };

  get generation(): PokemonGeneration {
    return this.config.generation;
  }

  get pokedexNumber(): number {
    return this.config.id;
  }


  showSpeechBubble(duration: number = 3000, friend: boolean) {
    super.showSpeechBubble(duration, friend);
  }

  static getPokemonData(type: string): PokemonConfig | undefined {
    return POKEMON_DATA[type];
  }
}

export const POKEMON_NAMES: ReadonlyArray<string> = [
  'Bella',
  'Charlie',
  'Molly',
  'Coco',
  'Ruby',
  'Oscar',
  'Lucy',
  'Bailey',
  'Milo',
  'Daisy',
  'Archie',
  'Ollie',
  'Rosie',
  'Lola',
  'Frankie',
  'Roxy',
  'Poppy',
  'Luna',
  'Jack',
  'Millie',
  'Teddy',
  'Cooper',
  'Bear',
  'Rocky',
  'Alfie',
  'Hugo',
  'Bonnie',
  'Pepper',
  'Lily',
  'Tilly',
  'Leo',
  'Maggie',
  'George',
  'Mia',
  'Marley',
  'Harley',
  'Chloe',
  'Lulu',
  'Missy',
  'Jasper',
  'Billy',
  'Nala',
  'Monty',
  'Ziggy',
  'Winston',
  'Zeus',
  'Zoe',
  'Stella',
  'Sasha',
  'Rusty',
  'Gus',
  'Baxter',
  'Dexter',
  'Willow',
  'Barney',
  'Bruno',
  'Penny',
  'Honey',
  'Milly',
  'Murphy',
  'Simba',
  'Holly',
  'Benji',
  'Henry',
  'Lilly',
  'Pippa',
  'Shadow',
  'Sam',
  'Lucky',
  'Ellie',
  'Duke',
  'Jessie',
  'Cookie',
  'Harvey',
  'Bruce',
  'Jax',
  'Rex',
  'Louie',
  'Jet',
  'Banjo',
];
