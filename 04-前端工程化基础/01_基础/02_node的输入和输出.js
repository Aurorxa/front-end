// 输入
const args = process.argv
console.log(args)
// 输出
if (args.length > 2) {
    console.log('您输入的参数是:');
    for (let i = 2; i < args.length; i++) {
        console.log(`参数 ${i - 2}: ${args[i]}`);
    }
} else {
    console.log('没有输入参数。');
}