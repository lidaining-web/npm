#!/usr/bin/env node
const program = require('commander')
var inquirer = require('inquirer')
const shell = require('shelljs')
const initAction = () => {
  inquirer.prompt([{
    type: 'input',
    message: '请输入姓名名称',
    name: 'name'
  }]).then(answers => {
    console.log('项目名称为:', answers.name)
    console.log('正在拷贝项目,请稍等')
    const remote = "https://github.com/PanJiaChen/vue-admin-template.git"
    const curName = "vue-admin-template"
    const tarName = answers.name
    shell.exec(`
      git clone ${remote} --depth=1
      mv ${curName} ${tarName}
      rm -rf ./${tarName}/.git
      cd ${tarName}
      npm i
    `, (error, stdout, stderr) => {
      if (error) {
        console.log(`exec error: ${error}`)
        return
      }
      console.log(`${stdout}`)
      console.log(`${stderr}`)
    })
  })
}
program.version(require('./package.json').version)
program.command('init').description('创建项目').action(initAction)
program.parse(process.argv)