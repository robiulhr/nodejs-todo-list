// function getdate() {
//   // javascript code for current date
//   const dateOptions = {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   };
//   //   let date = new Date().toLocaleDateString("en-US", dateOptions);
//   //   //   console.log(date);
//   //   return date;
// }
// module.exports.getdate = getdate;
// function getday() {
//   // javascript code for current date
//   const dateOptions = {
//     weekday: "long",
//   };
//   //   let date = new Date().toLocaleDateString("en-US", dateOptions);
//   //   //   console.log(date);
//   //   return date;
// }
// module.exports.getday = getday;

// -------------------- short way

exports.getdate = function () {
  const dateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return new Date().toLocaleDateString("en-US", dateOptions);
};

exports.getday = function () {
  const dateOptions = {
    weekday: "long",
  };
  return new Date().toLocaleDateString("en-US", dateOptions);
};
