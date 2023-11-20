// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

// If result is true, then it will return the result year
superbowlWin = (record) => {
    const result = record.find( record => record.result === "W");
    return !!result ? result.year : undefined;
}