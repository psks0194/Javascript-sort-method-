// Javascript sort method mutates the original array
// instead of putting sort() method directly over the array
// use SPREAD operator to clone original array
// and the SORT it

let popularLocations = [
  { Name: "London", Code: "EUS" },
  { Name: "Manchester", Code: "MAN" },
  { Name: "Birmingham", Code: "BHM" },
  { Name: "Liverpool", Code: "LIV" },
  { Name: "Glasgow", Code: "GLC" },
];

let sortedPopularLocations = [...popularLocations].sort((a, b) =>
  a.Name.localeCompare(b.Name)
);
