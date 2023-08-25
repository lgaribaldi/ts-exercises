export type User = {
  firstName: string;
  lastName?: string;
  age?: number;
  city?: string;
};

/*
    Write a function that receives an User object and return a string describing the user
    the result string should look like 'John Doe, 45 years old from New York'
    All fields except first name are optional, so the result could look like:
    'John, 45 years old from New York'
    'John Doe from New York'
    'John'
*/
export function getUserString(user: Readonly<User>): string {
  // Write your code here
  return "";
}
