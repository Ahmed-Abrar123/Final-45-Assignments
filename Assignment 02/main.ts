// ASSIGNMENT # 02

// storing a person name in a variable

let personName : string = "Ahmed Abrar"

// printing a person name in lower case

console.log("Lowercase:", personName.toLowerCase())

//  printing a person name in upper case

console.log("Uppercase:", personName.toUpperCase())

// printing a person name in title case

console.log("Titlecase:", personName.replace(/\b\w/g, c => c.toUpperCase()))

