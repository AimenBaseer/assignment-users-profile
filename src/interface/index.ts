export interface IGeo {
    lat: string;
    lng: string;
  }
  
  export interface ICompany {
    bs: string;
    catchPhrase: string;
    name: string;
    geo: IGeo;
  }
  
  export interface IAddress {
    city: string;
    street: string;
    suite: string;
    zipCode: string;
  }
  
  export interface IUser {
    id: string;
    name: string;
    email: string;
    phone: string;
    username: string;
    website: string;
    address: IAddress;
    company: ICompany;
  }
  