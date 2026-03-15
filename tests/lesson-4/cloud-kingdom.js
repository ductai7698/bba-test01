let powerUp = "mushroom";
let effect = "";
if (powerUp === "mushroom") {
  effect = "supper";
}
else if (powerUp === "flower") {
  effect = "fireballs";
}
else if (powerUp === "star") {
  effect = "invincible";
}
else if (powerUp === "none") {
  effect = "normal";
}
else {
  effect = "Unknown power-up!";
}   
console.log("Effect: " + effect);