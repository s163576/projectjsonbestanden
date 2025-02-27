// interfaces.ts

export interface Dog {
  id: number;
  name: string;
  breed_id: number;
  age: number;
  is_vaccinated: boolean;
  image_url: string;
}

export interface Person {
  id: number;
  name: string;
  description: string;
  age: number;
  is_active: boolean;
  birth_date: string;
  profile_image: string;
  gender: string;
  hobbies: string[];
  dog: Dog;
}
