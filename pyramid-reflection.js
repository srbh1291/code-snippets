/*

    *
   * *
  * * *
 * * * *
  * * *
   * *
    *

*/


const arr = []

for(let i=1;i<=4;i++){
    let space = ''
    let star = ''
    for(let j=1;j<=(4-i);j++){
       document.write('')
       space+=' '
    }
    for(let k=1;k<=i;k++){
       document.write('* ')
       star+='* '
    }
  
    if(i<4){
      arr.push((space+star))
    }
    document.write('<br>')
}

for(let i=2;i>=0;i--){
  console.log(arr[i])
  document.write(arr[i])
  document.write('<br>')
}
