function forLoop(j){
  for(var i = 0; i <25; i++){
    if (i === 1){
      j.push(`I am ${i} strange loop.`)
    } else {
      j.push(`I am ${i} strange loops.`)
  }
}
return j
}

function whileLoop(j){
  while(j>0)
  {console.log(j--)}
  return "done"
}
