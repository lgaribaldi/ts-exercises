import { User, getUserString } from "./2";

describe("Tests for exercise 2", () => {
  const testUser: User = {
    firstName: "Mark",
    lastName: "Smith",
    age: 32,
    city: "Boston",
  };
  it("should return complete user", () => {
    expect(getUserString(testUser)).toEqual(
      "Mark Smith, 32 years old, from Boston",
    );
  });
  it("should return user with no last name", () => {
    expect(getUserString({ ...testUser, lastName: undefined })).toEqual(
      "Mark, 32 years old from Boston",
    );
  });
  it("should return user with no age", () => {
    expect(getUserString({ ...testUser, age: undefined })).toEqual(
      "Mark Smith from Boston",
    );
  });
  it("should return user with no city", () => {
    expect(getUserString({ ...testUser, city: undefined })).toEqual(
      "Mark Smith, 32 years old",
    );
  });
  it("should return user with no city, last name or age", () => {
    expect(getUserString({ firstName: testUser.firstName })).toEqual("Mark");
  });
  it("should return 'year' when 1 year old", () => {
    expect(getUserString({ ...testUser, age: 1 })).toEqual(
      "Mark, 1 year old from Boston",
    );
  });
});
