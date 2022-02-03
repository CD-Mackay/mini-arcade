
  const robitNames = [
    "Bender B. Rodriguez", "BALEX", "SkyNet", "T-1000", "R2D2", "Roy Batty", "Vanessa Powers", "Ultron", "Motoko Kusanagi"
  ];

  const pickRobotName = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  export default {robitNames, pickRobotName};

