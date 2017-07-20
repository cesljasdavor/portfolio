export class PersonalInfo {
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string,
    public telephoneNumber: string,
    public email: string,
    public gender: string,
    public dateOfBirth: Date,
    public citizenship: string,
    public photo: string
  ) {}
}

/*
  "Davor",
  "Češljaš",
  "Marina Tartaglie 12, 10090 Zagreb (Hrvatska)",
  "+385 97 6958 886",
  "cesljasdavor@gmail.com",
  "Male",
  new Date("27.07.1995"),
  "croatian",
  "../../assets/icons/my_photo.jpg"
 */
