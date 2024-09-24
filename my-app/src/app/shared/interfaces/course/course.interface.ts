import {IAuthor} from "../author/IAuthor";

export interface ICourse {
  id: string,
  title: string,
  creationDate: Date,
  duration: number,
  description: string,
  topRated: boolean,
  authors: IAuthor[]
}
