  /* response type */
  export interface profileType {
      id: number;
      firstName: string;
      lastName: string;
      maidenName: string;
      age: number;
      gender: string;
      email: string;
      phone: string;
      username: string;
      password: string;
      birthDate: string;
      image: string;
      bloodGroup: string;
      height: number;
      weight: number;
      eyeColor: string;
      hair: Hair;
      ip: string;
      address: AddressType;
      macAddress: string;
      university: string;
      bank: Bank;
      company: Company;
      ein: string;
      ssn: string;
      userAgent: string;
      crypto: Crypto;
      role: string;
    }
    
    interface Hair {
        color: string;
        type: string;
      }
      
      interface Coordinates {
        lat: number;
        lng: number;
      }
      
      interface AddressType {
        address: string;
        city: string;
        state: string;
        stateCode: string;
        postalCode: string;
        coordinates: Coordinates;
        country: string;
      }
      
      interface Bank {
        cardExpire: string;
        cardNumber: string;
        cardType: string;
        currency: string;
        iban: string;
      }
      
      interface Company {
        department: string;
        name: string;
        title: string;
        address: AddressType;
      }
      
      interface Crypto {
        coin: string;
        wallet: string;
        network: string;
      }
      
  /* end of response type */

  