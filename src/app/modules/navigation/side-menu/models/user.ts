import {ListMenu} from "./list-menu";

export interface User {
  id: string;
  name: string;
  position: string;
  photo: string;
  cards: ListMenu[]
}
