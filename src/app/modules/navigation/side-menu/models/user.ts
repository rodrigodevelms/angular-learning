import {CardList} from "./card-list";

export interface User {
  id: string;
  name: string;
  position: string;
  photo: string;
  cards: CardList[]
}
