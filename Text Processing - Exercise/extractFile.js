function solve(input) {

    let extracted = input.split('\\');
    let fileName = extracted[extracted.length -1].split('.');
    let extension =  fileName.pop();
    
    fileName = fileName.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}
solve('C:\\Internal\\training-internal\\Template.pptx')

//
console.log("---------")
//

function extractFile(path) {
let file = path.substring(path.lastIndexOf("\\") + 1);
let fileName = file.substring(0, file.lastIndexOf("."));
let fileExtension = file.substring(file.lastIndexOf(".") + 1);

console.log(`File name: ${fileName}`)
console.log(`File extension: ${fileExtension}`);
    
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')