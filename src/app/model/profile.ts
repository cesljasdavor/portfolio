import {Education} from "./education";
import {InfoPair} from "./infoPair";
import {Employment} from "./employment";
import {PersonalInfo} from "./personalInfo";
import {Project} from "./project";

/**
 * Class that represents portfolio of a person.
 */
export class Profile {

  /**
   * Constructor that initializes this object.
   *
   * @param personalInfo
   * @param education
   * @param professionalSkills
   * @param employments
   * @param programmingLanguages
   * @param operatingSystems
   * @param other
   * @param projects
   */
  constructor(
    public personalInfo: PersonalInfo,
    public education: Education[],
    public personalSkills: InfoPair[],
    public employments: Employment[],
    public programmingLanguages: InfoPair[],
    public operatingSystems: InfoPair[],
    public other: InfoPair[],
    public projects: Project[]
  ){}
}
