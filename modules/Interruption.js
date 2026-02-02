[
  ()=>{
    i=0;eval()
    testF()
    while(1){i++}
  },()=>{
    addResult("IU",(5000-i%5000)%5000,0)
  },()=>{
    delete globalThis.i
  }
]
