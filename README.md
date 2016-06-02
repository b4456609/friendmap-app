# friendmap-app
A WBSE Final project

## 需求軟體
- [Git](https://git-scm.com/)
- [GitHub Desktop](https://desktop.github.com/)(可選）
- [Node.js](https://nodejs.org/en/) 4.0 or newer

下載安裝完Nodejs後，安裝npm套件
- 安裝gulp `npm install -g gulp`
- 安裝bower `npm install -g bower`

## 下載專案
1. clone專案到電腦(可使用github desktop)
2. 到專案目錄下開啟命令列，輸入以下指令安裝專案的依賴
```
npm install
bower insatll
```

## 開發
這個會開啟http://localhost:9000/網頁，修改檔案會自動refresh頁面。
```
gulp server
```
### IDE
建議使用[Visual Studio Code](https://www.visualstudio.com/en-us/products/code-vs.aspx)開發

vscode的Format Code快速鍵是`Ctrl+Shift+I`

在commit前要記得要符合程式碼巢狀格式

### 開發新能
為了在開發新功能後在master branch可以運作

1. 在開發新功能，建議開一個新的git branch
2. 完成功能可運作之後在merge到master branch
3. 再push到Github
