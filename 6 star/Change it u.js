function changer(str) { 
    let al = {a:"z",b:"a",c:"b",d:"c",e:"d",f:"e",g:"f",h:"g",i:"h",
    j:"i",k:"j",l:"k",m:"l",n:"m",o:"n",p:"o",q:"p",r:"q",
    s:"r",t:"s",u:"t",v:"u",w:"v",x:"w",y:"x",z:"y"};
    let str1 = str.split('')//.map(lt=> lt=al.lt).join('');
    let arr=[];
    for(let i=0;i<str1.lengthl;i++){
        arr.push(al.str1[i])
    }
    return str1;
    // return str1.toLowerCase().split('').map(x=> 
    //     'eyuioa'.indexOf(x)!==-1 ? x.toUpperCase() :
    //     'qwrtpsdfghjklzxcvbnm'.indexOf(x)!==-1 ? x.toLowerCase() :
    //     x).join('');        
  }
  console.log(changer('sponge1'));