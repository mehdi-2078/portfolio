export interface Project {
  _id: string;
  title: string;
  description: string;
  employer: string;
  feature: string;
  technology: string;
  projectLink: string;
  images: [
    {
      _id: string;
      contentType: string;
      data: string;
    }
  ];
}
export interface ProjectImages {
  _id: string;
  contentType: string;
  data: string;
}
