
export class User {
    id: number;
    name: string;
    phone: string;
    email: string;
    address = new Address(); 
}

export class Address{
    street : string;
    scuite : string;
    city : string;
    zipcode: string;
}