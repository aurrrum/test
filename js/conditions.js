let a = 2 * 4;

if (a == 8) {
    console.log("8");
} else {
    console.log(a);
}

a = 40;

if (a < 50) {
    console.log("lt " + a);
} else if (a > 50) {
    console.log("gt" + a)
}
else {
    console.log(a);
}

(a == 50) ? console.log("a = 50"): console.log("a != 50, a = " + a);

switch (a) {
    case a < 50:
        console.log("lt " + a);
        break;
    case a > 50:
        console.log("lt " + a);
        break;
    case 50:
        console.log("a = " + a);
        break;
    default:
        console.log("a = " + a);
        break;
}