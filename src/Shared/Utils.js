export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomSumIn(arr, max) {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0, len = sets.length; j < len; j++) {
            const candidateSet = sets[j].concat(arr[i]);
            const candidateSum = candidateSet.reduce((a, b) => a + b);
            if (candidateSum <= max) {
                sets.push(candidateSet);
                sums.push(candidateSum);
            }
        }
    }
    return sums[getRandomInt(0, sums.length - 1)];
}