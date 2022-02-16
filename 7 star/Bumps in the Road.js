function bump(x){
   return (x.replace(/[^n]/g,"")).length >15 ? "Car Dead":"Woohoo!"

}

console.log(bump("_nn___n__nn_n_nnnn________nnn_nn_"))// "Woohoo!"