const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return members.sort().reduce((name, member) => {
    if (typeof member !== "string") return name;
    
    return name += member.charAt(0).toUpperCase();
  }, '');
};
