function takeANumber (line,name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing (katzDeliLine) {
 var i = 0
 if (katzDeliLine.length === 0) {
 return `There is nobody waiting to be served!`
} else  {
return `Currently serving ${katzDeliLine.shift()}.`
 }
}

function currentLine (katzDeliLine) {
var lineOrder = []
for (let i = 0; i < katzDeliLine.length; i++){
  lineOrder.push(` ${i + 1}. ${katzDeliLine[i]}`)
return 'The line is currently:'+ lineOrder.join(",")
} else {
  return "The line is currently empty."
  }
} 
