const family = {
    Mom: "Lakisha",
    Sister1: "Jaeda",
    Sister12: "Jaylah",
    Brother1: "Jamari",
    Brother2: "Jahvon"
}

const sayMyFamiy = (object, properyName) => object[properyName];

console.log(sayMyFamiy(family, "Mom"))
console.log(family.Brother1)
console.log(family["Sister1"])