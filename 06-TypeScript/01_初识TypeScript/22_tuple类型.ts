const nums: [number, string, () => void] = [1, "2", () => { console.log("3") }];

console.log(nums[0], nums[1]);

nums[2]()

export { }