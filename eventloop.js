setTimeout(() => {
  console.log('timeout')
}, 0);

(()=>{
  console.log('5')
})()

Promise.resolve('rasdf').then(res=>console.log(res))

