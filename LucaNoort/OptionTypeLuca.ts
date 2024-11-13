type Sum<a, b> = {kind: 'left', value: a} | {kind: 'right', value: b}

type Option<a> = Sum<a, false>
const Some = <a>(v: a): Option<a> => {
    return {kind: 'left', value: v}
}
const None = <a>(): Option<a> => {
    return {kind: 'right', value: false}
}

function sumUptwo(n: number): number {
    let sum = 0;
    for(let i = 1; i < n; i++) {
        sum++;
    }
    return sum;
}