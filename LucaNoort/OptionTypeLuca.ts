type Sum<a, b> = {kind: 'left', value: a} | {kind: 'right', value: b}

type Option<a> = Sum<a, false>
const Some = <a>(v: a): Option<a> => {
    return {kind: 'left', value: v}
}
const None = <a>(): Option<a> => {
    return {kind: 'right', value: false}
}

const sumUpTwo = (n : number): number => {
    let sum : number = 1
    if(sum < n) {
        sum = sum + 1
        return sumUpTwo(sum)
    }
    return(sum)
}