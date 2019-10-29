let a = 2 * 4;

if (a == 8) {
    console.log("8\n");
} else {
    console.log(a + "\n");
}

a = 50;

if (a < 50) {
    console.log("lt " + a + "\n");
} else if (a > 50) {
    console.log("gt" + a + "\n");
}
else {
    console.log(a + "\n");
}

(a == 50) ? console.log("a = 50\n"): console.log("a != 50, a = " + a + "\n");

switch (a) {
    case a < 50:
        console.log("lt " + a + "\n");
        break;
    case a > 50:
        console.log("lt " + a + "\n");
        break;
    case 50:
        console.log("a = " + a + "\n");
        break;
    default:
        console.log("a = " + a + "\n");
        break;
}

while (a < 55) {
    a++;
    console.log(a);
}

console.log("\n");

do {
    a--;
    console.log(a);
} while (a > 50);

console.log("\n");

for (let i = 0; i < 10; i++) {
    console.log(i+1);
}