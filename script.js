function randomChislo(max) { // 1
    return Math.floor(Math.random() * max);
  }
function prov(oc){
    if(oc >= 80){
        console.log('A')
    }
    else if(oc <= 80 && oc > 70){
        console.log('B')
    }
    else if(oc <= 70 && oc > 60){
        console.log('C')
    }
    else if(oc <= 60 && oc >= 50){
        console.log('D')
    }else{
        console.log('F')
    }
    console.log(oc)
}
function lowText(tTest){
    tTest = tTest.toLowerCase()
    console.log(tTest)
}
prov(randomChislo(100))

lowText('SJGLDKSJGHDLFKG') // 2

function lottery(){ // 3
    const win = `${randomChislo(99)}-${randomChislo(99)}-${randomChislo(99)}`
    console.log(win)
}

lottery()
lottery()
lottery()
