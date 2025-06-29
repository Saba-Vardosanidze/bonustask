type Person = {
  gender: string;
  name: {
    first: string;
    last: string;
  };
  dob: {
    age: number;
  };
  picture: {
    medium: string;
  };
  login: {
    username: string;
  };
  location: {
    city: string;
    country: string;
    postcode: number;
  };
};
