1. Create base empty project with Command.txt
2. Create nodemon.json file with content: "{
    "watch": ["src"],
    "ext": ".ts,.js",
    "ignore": [],
    "exec": "ts-node ./src/index.ts"
}"
3. Create server with library 'express'
