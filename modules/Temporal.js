[
  ()=>{
    i=0
    testF() 
    while(1){eval();i++;}
  },()=>{
    addResult("TU",(1/i)-BASE.TU,1/i)
  },()=>{
    delete globalThis.i
  }
]
