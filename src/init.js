import fs from "fs";
import inquirer from "inquirer";
import download from "download-git-repo";
import ora from "ora";
import { log } from "./utils/log.js";

const templateData = [
  {
    name: "taro小程序",
    downloadUrl: "https://github.com:caigouzi1/taroApp-TS#master",
    value: "0",
  },
  {
    name: "React Native App",
    downloadUrl: "https://github.com:caigouzi1/weather#master",
    value: "1",
  },
  {
    name: "Ant Design Pro中后台",
    downloadUrl: "https://github.com:caigouzi1/Ant-Design-Pro--template#master",
    value: "2",
  },
];

const spinner = ora("正在现在项目模版");

export function initInPath(path) {
  try {
    if (!fs.existsSync(path)) {
      inquirer
        .prompt({
          type: "list",
          name: "type",
          message: "选择项目模版?",
          choices: templateData,
          default: true,
        })
        .then(async (answers) => {
          const downloadUrl = templateData[answers.type].downloadUrl;

          await new Promise((resolve, reject) => {
            spinner.start();
            download(downloadUrl, path, { clone: true }, (err) => {
              if (err) return reject(err);
              resolve();
            });
          });

          spinner.succeed("下载成功");
        })
        .catch((error) => {
          if (error.isTtyError) {
            log.error("产生无法显示的错误");
          } else {
            if (error) {
              spinner.fail("下载过程出现异常");
              console.log(error);
            }
          }
        });
    } else {
      log.error("文件夹已存在");
    }
  } catch (err) {
    console.error(err);
  }
}

// exports.initInPath = initInPath;
