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
      contentType: string;
      data: string;
    }
  ];
}
export interface ProjectImages {
  contentType: string;
  data: string;
}
