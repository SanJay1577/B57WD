//OOPS
//Factory functions
// return an objects
function createToy(name, dia, type, color, wrapper) {
  return {
    name,
    dia,
    type,
    color,
    wrapper,
    buildToy: function () {
      console.log(`
    Start Manufacturing ${name}
    Head is builing for ${dia} diameter
    Body type is build for ${type} Body
    Color of the toy is assigened to be ${color}
    packing the toy in ${wrapper}
   `);
    },
    info: function () {
      console.log(`I'm, ${name}, I was build in createtoy method`);
    },
  };
}

const toy1 = createToy("Toy1", "50cm", "Cone", "red", "box");
const toy2 = createToy("TOY2", "60CM", "Sqaure", "blue", "Cone");

console.log(toy1);
console.log(toy2);
toy1.buildToy();
toy1.info();
toy2.buildToy();
toy2.info();
