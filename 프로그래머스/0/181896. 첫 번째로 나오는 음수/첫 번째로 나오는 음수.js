function solution(num_list) {
    for(let i =0; i<num_list.length; i++){
        if (num_list[i]<0){
            console.log("음수:", num_list[i])
            return i
        }
        
    }
    
    

    return -1;
}