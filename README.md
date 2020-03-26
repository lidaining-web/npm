# 自定义npm包
> 执行 `npm ldn-cli` , 将从github上拉取vue-admin-template的代码, 并且自动安装依赖

# 修改npm命令
> 位置: package.json --> "bin": {"ldn-cli": "index.js"} , 修改命令后执行 `npm link` 后才生效