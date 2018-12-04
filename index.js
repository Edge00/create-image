#!/usr/bin/env node

const sharp = require('sharp');
const os = require('os');
const homeDir = os.homedir();
const path = require('path');

const input = process.argv.slice(2);

const validateInput = input => {
  if (input.length <= 1) {
    return '你又调皮了，使用方法：create-image Number Number';
  }

  const width = Number(input[0]);
  const height = Number(input[1]);

  if (isNaN(width) || isNaN(height)) {
    return '你又调皮了，使用方法：create-image Number Number';
  }

  if (Number(input[0]) <= 0 || Number(input[1]) <= 0) {
    return '你又调皮了，使用方法：create-image Number Number';
  }
  return '';
}

const validateResult = validateInput(input);

if (validateResult !== '') {
  console.log(validateResult)
} else {

  let width, height;

  try {
    width = Number(input[0]);
    height = Number(input[1]);
    width = Math.abs(width);
    height = Math.abs(height);
    const config = {
      create: {
        width: width,
        height: height,
        channels: 4,
        background: { r: 255, g: 0, b: 0, alpha: 0.5 }
      }
    }
    sharp(config).toFile(path.join(homeDir, 'Desktop', `${width}x${height}.png`));
    console.log(`已生成 ${width}x${height}.png 至桌面~`)
  } catch (error) {
    console.log(`完蛋了：${error}`);
  }

}





