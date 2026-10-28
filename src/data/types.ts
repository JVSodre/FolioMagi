export type GameId = 'hp1' | 'hp2' | 'hp3';

export type CardRarity = 'Bronze' | 'Silver' | 'Gold';

export type CardCategory =
    | 'Witch'
    | 'Wizard'
    | 'Creature'
    | 'Vampire'
    | 'Goblin'
    | 'Hag'
    | 'Giant'
    | 'Special';

export type SubCategory = 
    | 'FamousWizards' 
    | 'FamousWitches' 
    | 'Quidditch' 
    | 'FamousVampires' 
    | 'FamousGoblins' 
    | 'FamousHag' 
    | 'FamousGiants' 
    | 'Dragons' 
    | 'Beast' 
    | 'Bonus';

export type subTypes = 
    | 'The Weird Sisters'
    | 'Herbology'
    | 'Quidditch'

export interface FolioCardData {
    id: string;
    number: number;
    name: string;
    category: CardCategory;
    subCategory?: SubCategory;
    rarity: CardRarity;
    age?: number;
    died?: number;
    subTypes?: subTypes;
    game: GameId;
    description: string;
    imageUrl: string;
}