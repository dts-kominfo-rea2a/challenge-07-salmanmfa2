const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi)=>{
  try {
    const arrIXX = await promiseTheaterIXX();
    const arrVGC = await promiseTheaterVGC();
    const arrGabung = arrIXX.concat(arrVGC);
    let acc = 0;
    for (let index = 0; index < arrGabung.length; index++) {
      if(arrGabung[index].hasil===emosi){
        acc++;
      };
      
    }
    

   
    return acc;

  }
  catch{
    
    console.log("error");
  }
}

module.exports = {
  promiseOutput,
};
