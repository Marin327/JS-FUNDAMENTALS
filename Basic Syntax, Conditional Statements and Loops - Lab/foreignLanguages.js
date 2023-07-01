function solve(arg1) {
let country = arg1;

switch (country){
    case "England":
    case "USA":
        console.log("English");
        break;
    case "Spain":
    case "Argentina":
    case "Mexico":
       console.log("Spanish");
        break;
    default:
        console.log("unknown");
        break;
   }
}
solve("USA");