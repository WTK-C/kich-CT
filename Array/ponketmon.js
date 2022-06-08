function solution(nums) {
    var answer = 0;
    // 반복되는 값 제거
    const newNums  = new Set(nums)
    // 배열로 변환
    const newNumsArr = [...newNums]
    // 얻을 수 있는 폰켓몬 최대값
    const myEarns = nums.length/2
    // 얻을 수 있는 최대 폰켓몬 종류수 구하는 조건문
    if(myEarns <= newNumsArr.length) {
        answer = myEarns
        return answer
    }

    answer = newNumsArr.length

    return answer;
}