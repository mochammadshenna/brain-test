function countRupiah(param1, param2){
  let tempRupiah = '';
  let result = [];


  for(let i = param2; i > 0; i--){

  if(param1 <= 20000 && param2 >= 1){
      tempRupiah = tempRupiah + 20000 + ',';
      param1 -= 20000;
    } 
    else if(param1 >= 1000 && param2 > 0){
      tempRupiah = tempRupiah + 1000 + ',' ;
      param1 -= 1000;
    } 
    else {
      result.push(+tempRupiah.split(',').join(''));
    }
  }
  return tempRupiah;
}



  console.log(countRupiah(17000, 1));
  console.log(countRupiah(23000, 4));
  console.log(countRupiah(25000, 6));