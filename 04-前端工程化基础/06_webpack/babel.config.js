module.exports = api => {
    return {
        presets: [
            ["@babel/preset-env", {
                useBuiltIns: "usage",
                targets: api.caller(caller => caller && caller.target === "node") ? {node: "current"} : {
                    chrome: "58",
                    ie: "11"
                },
                "corejs": "3"
            }]
        ]
    }
}