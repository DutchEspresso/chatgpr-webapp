export interface Author {
  authorId: string;
  name: string;
}

export interface Paper {
  paper_id: string;
  title: string | null;
  year: number | null;
  url: string | null;
  created_at: Date | null;
  author: string | null;
  tldr: string | null;
  insights: string;
}

export interface ListOfPapers {
  papers: Array<Paper>;
}

export interface ContentItem {
  type: string;
  text: string;
}

export interface SemanticScholarResponse {
  data: Paper[];
}
