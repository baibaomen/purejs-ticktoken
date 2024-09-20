# PureJS-Tiktoken
[English](#project-introduction) | [简体中文](#项目简介)

## Project Introduction

After introducing `purejs-ticktoken.js` in an HTML page, you can calculate the token count of messages for different OpenAI models in front-end JavaScript code.

## Usage Example

The `demo.html` in the project shows how to use `purejs-ticktoken.js` in an HTML page to calculate the message token count. Here's a minimal example:

```html
<html>
    <body>
    <!-- Import the purejs-ticktoken.js library -->
    <script src="purejs-ticktoken.js"></script>

    <script>
        // 1. Get the encoding name for the model
        const model = 'gpt-4o';  // Model name
        const encodingName = window.getEncodingNameForModel(model);  // Get the encoding name
        console.log('Encoding name:', encodingName);  // Output encoding name, e.g., "o200k_base"

        // 2. Encode and decode text
        const encoder = window.getEncoding(encodingName);  // Get the encoder object
        const text = "This is a test.";  // Text to encode

        const tokens = encoder.encode(text);  // Encode the text into token array
        console.log('Encoded tokens:', tokens);  // Output token array
        console.log('Number of tokens:', tokens.length);  // Output the number of tokens

        const decodedText = encoder.decode(tokens);  // Decode the token array back into text
        console.log('Decoded text:', decodedText);  // Output decoded text, should be the same as the original
    </script>
    </body>
</html>
```

## Relationship with js-tiktoken

PureJS-Tiktoken is developed based on [js-tiktoken](https://github.com/dqbd/tiktoken). `js-tiktoken` is a JavaScript library used to calculate the token count of OpenAI model messages and is typically used via npm. However, PureJS-Tiktoken bundles `js-tiktoken` into a static file using `browserify`, allowing it to be used directly in HTML pages without npm.

## How to package purejs-ticktoken.js yourself

You can follow the steps below to manually package and generate the latest version of `purejs-ticktoken.js`:

1. **Clone the project**  
   First, clone this project to your local machine:
   ```bash
   git clone https://github.com/baibaomen/purejs-ticktoken.git
   ```
   Then enter the project directory:
   ```bash
   cd purejs-ticktoken
   ```

2. **Install dependencies**  
   Before packaging, first install all dependencies:
   ```bash
   npm install
   ```

3. **Quickly package and start the demo**  
   After installation, you can package and launch the `demo.html` page with the following command:
   ```bash
   npm start
   ```

   This command will automatically package and generate a new `purejs-ticktoken.js` file and open `demo.html` in a browser, where you can directly use the newly generated library.

4. **Manually package to generate a pure JS file**  
   If you want to package without launching the demo page, you can use the following command:
   ```bash
   npm run build
   ```

5. **Specify a specific version of `js-tiktoken`**  
   If you need to package with a specific version of `js-tiktoken`, modify the version number in the `package.json` file. For example, change:
   ```json
   "js-tiktoken": "latest"
   ```
   To:
   ```json
   "js-tiktoken": "^1.0.14"
   ```
   Then run `npm install` and the packaging command again.

## Contribution

Feel free to provide feedback and contribute to this project!

[Switch to 简体中文](#项目简介)

---

## 项目简介

在html页面中引入 `purejs-ticktoken.js`后，您即可以在前端JavaScript代码里计算 OpenAI 不同模型的消息 token 数。

## 使用示例

项目中的 `demo.html` 展示了如何在 HTML 页面中使用 `purejs-ticktoken.js` 来计算消息 token 数。一个极简的示例如下：

```html
<html>
    <body>
    <!-- 引入 purejs-ticktoken.js 库 -->
    <script src="purejs-ticktoken.js"></script>

    <script>
        // 1. 获取模型的编码名称
        const model = 'gpt-4o';  // 模型名称
        const encodingName = window.getEncodingNameForModel(model);  // 获取编码名称
        console.log('编码名称:', encodingName);  // 输出编码名称，如 "o200k_base"

        // 2. 对文本进行编码和解码
        const encoder = window.getEncoding(encodingName);  // 获取编码器对象
        const text = "This is a test.";  // 需要编码的文本

        const tokens = encoder.encode(text);  // 将文本编码为 token 数组
        console.log('编码后的 tokens:', tokens);  // 输出 token 数组
        console.log('token 数量:', tokens.length);  // 输出 token 数量

        const decodedText = encoder.decode(tokens);  // 将 token 数组解码为原文本
        console.log('解码后的文本:', decodedText);  // 输出解码后的文本，应该与原文本一致
    </script>
    </body>
</html>
```

## 与 js-tiktoken 的关系

PureJS-Tiktoken 基于 [js-tiktoken](https://github.com/dqbd/tiktoken) 开发。`js-tiktoken` 是一个用于计算 OpenAI 模型消息 token 数的 JavaScript 库，通常需要通过 npm 安装和使用。而 PureJS-Tiktoken 通过使用 `browserify` 工具将 `js-tiktoken` 打包为一个静态文件，使得在不需要 npm 的 HTML 页面中也能使用相同的功能。

## 如何自行打包 purejs-ticktoken.js

您可以按照以下步骤，手动打包并生成最新版本的 `purejs-ticktoken.js`：

1. **克隆项目**  
   首先将本项目克隆到您的本地计算机：
   ```bash
   git clone https://github.com/baibaomen/purejs-ticktoken.git
   ```
   然后进入项目目录：
   ```bash
   cd purejs-ticktoken
   ```

2. **安装依赖**  
   在进行打包之前，首先需要安装所有依赖项：
   ```bash
   npm install
   ```

3. **快速打包并启动演示**  
   安装完成后，您可以通过以下命令进行打包并启动 `demo.html` 页面：
   ```bash
   npm start
   ```

   该命令会自动打包生成一个新的 `purejs-ticktoken.js` 文件并在浏览器中打开 `demo.html`，您可以在 HTML 页面中直接使用新生成的库。

4. **手动打包生成纯JS文件**  
   如果您只想打包而不启动演示页面，可以使用以下命令：
   ```bash
   npm run build
   ```

5. **指定特定版本的 `js-tiktoken`**  
   如果您需要针对特定版本的 `js-tiktoken` 进行打包，请在 `package.json` 文件中修改 `js-tiktoken` 的版本号。例如，您可以将：
   ```json
   "js-tiktoken": "latest"
   ```
   改为：
   ```json
   "js-tiktoken": "^1.0.14"
   ```
   然后重新运行 `npm install` 和打包命令。

## 贡献

欢迎对本项目提出意见和贡献代码！

[切换到 English](#project-introduction)
