//Formula weight(kg)/[height(m)]^2
//m=in*.0254
tom = ["Tom", 9, 8];
jerry = ["Jerry", 10, 45];

let tHeight= tom[1]*.0254;
let jeHeight= jerry[1]*.0254;

let toMass= tom[2]/1000;
let jeMass= jerry[2]/1000;

let toBMI = toMass/(tHeight*tHeight);
let jeBMI = jeMass/(jeHeight*jeHeight);

truth = Boolean(toBMI>jeBMI);

console.log("Is "+tom[0]+"'s BMI higher than " +jerry[0]+"'s? "+ truth);