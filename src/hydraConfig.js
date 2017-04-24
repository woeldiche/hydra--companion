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
  ["None", 0],
  ["Cone 1.5 m, 30 grader", {diff: 3}],
  ["Cone 2.5 m, 30 grader", {diff: 6}],
  ["Cone 5.0 m, 30 grader", {diff: 8}],
  ["Cone 10.0 m, 30 grader", {diff: 12}],
  ["Cone 20.0 m, 30 grader", {diff: 18}],
  ["Line 1.5 m", {diff: 2}],
  ["Line 2.5 m, diameter 1.5 m", {diff: 4}],
  ["Line 10.0 m, diameter 1.5 m", {diff: 8}],
  ["Line 20.0 m, diameter 1.5 m", {diff: 10}],
  ["Line 40.0 m, diameter 1.5 m", {diff: 20}],
  ["0.5 m3./skill", {diff: 3, value: function(skill) {
      let area = (skill * 0.5);
      return area + ' m3.';
    }
  }],
  ["3.0 m3./skill", {diff: 6, value: function(skill) {
      let area = (skill * 3);
      return area + ' m3.';
    }
  }],
  ["10 m3/skill", {diff: 12, value: function(skill) {
      let area = (skill * 10);
      return area + ' m3.';
    }
  }],
  ["Pillar 2.5 m Diameter, 13.0 m High", {diff: 4}],
  ["Pillar 5.0 m Diameter, 13.0 m High", {diff: 8}],
  ["Pillar 10.0 m Diameter, 13.0 m High", {diff: 12}],
  ["Pillar 15.0 m Diameter, 13.0 m High", {diff: 20}],
  ["Sphere 1,5 m Radius", {diff: 4}],
  ["Sphere 2,5 m Radius", {diff: 8}],
  ["Sphere 5.0 m Radius", {diff: 12}],
  ["Sphere 10.0 m Radius", {diff: 16}],
  ["Sphere 20.0 m Radius", {diff: 24}],
  ["Wall 1.5 m high, 1.5 m Long, 0.5 m Wide", {diff: 4}],
  ["Wall 3.0 m high, 3.0 m Long, 0.5 m Wide", {diff: 8}],
  ["Wall 0.5 m high, 0.5 m long, 0.5 m wide/skill", {diff: 16, value: function(skill) {
      let area = (skill * 0.5);
      return 'Wall 0.5 m high, 0.5 m long, ' + area + ' m wide.';
    }
  }],
  ["Wall 1.5 m high, 1.5 m Long,1.5 m Wide/skill", {diff: 24, value: function(skill) {
      let area = (skill * 1.5);
      return 'Wall 0.5 m high, 0.5 m long, ' + area + ' m wide.';
    }
  }],
  ["Wall Hemisphere 0.5 m square/skill, radius up to 0.5 m/skill, 0.5 m/skill high", {diff: 12, value: function(skill) {
      let square = (skill * 0.5);
      let radius = (skill * 0.5);
      let height = (skill * 0.5);
      return "Wall Hemisphere " + square + " m square, radius up to " + radius + " m, " + height + " high";
    }
  }],
  ["Wall ring 0.5 m long/skill, radius of up to 0.5 m/skill, 0.5 m/skill high", {diff: 12, value: function(skill) {
      let long = (skill * 0.5);
      let radius = (skill * 0.5);
      let height = (skill * 0.5);
      return "Wall ring " + long + " m long, radius up to " + radius + " m, " + height + " high";
    }
  }],
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
