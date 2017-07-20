import {Project} from "./project";
export class Employment {
  constructor(
    public companyName: string,
    public description: string,
    public period: string,
    public projects?: Project[]
  ) {}
}
