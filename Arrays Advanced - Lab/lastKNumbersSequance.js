function solve(n, k) {
    let res = [1];

    for (let i = 0; i < n - 1; i++) {
        let seqK = res.slice(-k);
        let sum = 0;
        for (el of seqK) {
            sum += el;
        }
        res.push(sum);
    }

    console.log(res.join(" "));
}
solve(6, 3)
solve(8, 2)