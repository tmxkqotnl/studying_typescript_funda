interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

export const enum PhoneType {
  Home = "home",
  Office = "office",
  Studio = "studio",
}

export interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}
