function solution(sizes) {
    var answer = 0;  
    const newSizes = sizes.map(([w,h]) => w < h ? [h, w] : [w, h] )
    
    const maxW = Math.max.apply(null, newSizes.map(size => size[0]));
    const maxH = Math.max.apply(null, newSizes.map(size => size[1]));
    
    answer = maxW * maxH

    return answer;
}