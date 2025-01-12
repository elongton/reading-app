export interface Book {
  title: string,
  author: string,
  published: number,
  coverImage: string,
  id: number,
}

export interface DisplayBook extends Book{
  inList?: boolean
}
