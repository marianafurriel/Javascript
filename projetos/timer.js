let tempoEmSeg = 60; //tempo em segundos

for (let index = 1; index < tempoEmSeg+1; index++) {
    setTimeout(() => {console.log(index +"s")},index*1000);  
}