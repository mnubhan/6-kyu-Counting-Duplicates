function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}

function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}

const duplicateCount = text =>{
    switch(text){
        case "":
            return 0;
            break;
        default:
            const arr = text.toLowerCase().split('')
            const arrUnique= [...new Set(arr)]
            return arrUnique.map(eUnique=> arr.filter(e=>e==eUnique).length).filter(num=>num>1).length
    }
}
