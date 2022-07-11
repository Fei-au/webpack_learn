export default function sum(...args){
    console.log(args)
    return args.reduce((p, c)=> p + c, 0);
}

// console.log(sum(1, 3, 4, 6, 7, 7, 6));