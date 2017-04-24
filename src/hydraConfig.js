const Data = {};

Data.browsers = new Map([
  ["Chrome Som er en browser", 1],
  ["Firefox", 2],
  ["Edge", 3]
]);

Data.school = new Map([
  ["Abjuration"],
  ["Conjuration"],
  ["Divination"],
  ["Enchantment"],
  ["Evocation"],
  ["Illusion"],
  ["Necromancy"],
  ["Transmutation"],
  ["Universal"],
]);

Data.effect = new Map([

]);

Data.time = new Map([
  ["Immediate action", {diff: 25}],
  ["Swift Action", {diff: 15}],
  ["Standard Action", {diff: 2}],
  ["Full round Action", {diff: 0}],
  ["Ritual 10 min", {diff: -5}],
  ["Ritual 1 Hour", {diff: -10}],
  ["Ritual 1 day", {diff: -15}],
  ["Ritual Site 1 week", {diff: -25}],
  ["Ritual Site 1 Month", {diff: -40}],
  ["Ritual Site 3 Month", {diff: -60}],
]);

Data.components = new Map([
  ["V, S, M, F", {diff: 0}],
  ["V, S, M", {diff: 10}],
  ["V, M, F", {diff: 5}],
  ["M, S, F", {diff: 5}],
  ["F, S", {diff: 10}],
  ["F, M", {diff: 10}],
  ["F, V", {diff: 10}],
  ["S, M", {diff: 15}],
  ["V, S", {diff: 15}],
  ["V, M", {diff: 15}],
  ["Somatic", {diff: 20}],
  ["Verbal", {diff: 20}],
  ["Material", {diff: 20}],
  ["Focus", {diff: 15}],
  ["None", {diff: 25}],
  ["None Sorcerer", {diff: 0}],
]);

Data.delivery = new Map([
  ["Personal", {diff: 0}],
  ["Melee Touch", {diff: 0}],
  ["Ranged Touch", {diff: -5}],
  ["Area", {diff: 0}],
]);

Data.range = new Map([
  ["Melee/Personal", {diff: 0, value: 0}],
  ["Close 5.0 m + 2 m/2skill", {diff: 3, value: function(skill) {
      let range = 5 + (Math.floor(skill/2) * 2);
      return range + ' meters.';
    }
  }],
  ["Local 25.0 m + 5.0 m/skill", {diff: 6, value: function(skill) {
      let range = 25 + (skill * 5);
      return range + ' meters.';
    }
  }],
  ["Remote 125.0 m + 15.0 m/skill", {diff: 12, value: function(skill) {
      let range = 5 + (skill * 2);
      return range + ' meters.';
    }
  }],
  ["Unlimited", {diff: 40, value: function(skill) {
      return 'Unlimited.';
    }
  }],
]);

Data.area = new Map([

]);

Data.addon = new Map([

]);

Data.duration = new Map([

]);

Data.save = new Map([

]);

Data.damage = new Map([

]);

Data.sr = new Map([

]);

/*
let rangeValue = Data.range.get("Close 5.0 m + 2 m/2skill").value(10);
console.log(rangeValue);
*/

export default Data;
