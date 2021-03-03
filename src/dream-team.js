const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let membersSorted = members.map((member) => {
    if (typeof member === "string") {
      return member.trim().toUpperCase();
    }
  }).sort();

  return membersSorted.reduce((name, member) => {
    if (typeof member === "undefined") return name;
    return name += member.charAt(0);
  }, '');
};