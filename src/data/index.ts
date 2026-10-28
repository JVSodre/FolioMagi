import type { FolioCardData } from './types';
import { hp1Cards } from './hp1Cards';
import { hp2Cards } from './hp2Cards';

export type{
    FolioCardData,
    GameId,
    CardRarity,
    CardCategory,
    SubCategory,
} from './types';

export {hp1Cards};
export {hp2Cards};

export const allCards: FolioCardData[] = [
    ...hp1Cards,
    ...hp2Cards,
]