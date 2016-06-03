# friendmap-app
A WBSE Final project

## 需求軟體
- [Git](https://git-scm.com/)
- [GitHub Desktop](https://desktop.github.com/)(可選)
- [Node.js](https://nodejs.org/en/) 4.0 or newer

下載安裝完Nodejs後，安裝npm套件
- 安裝gulp `npm install -g gulp-cli`
- 安裝bower `npm install -g bower`

## 下載專案
1. clone專案到電腦(可使用github desktop)
2. 到專案目錄下開啟命令列，輸入以下指令安裝專案的依賴
```
npm install
bower install
```

## 開發
這個會開啟http://localhost:9000/網頁，修改檔案會自動refresh頁面。
```
gulp serve
```
### IDE
建議使用[Visual Studio Code](https://www.visualstudio.com/en-us/products/code-vs.aspx)開發

vscode有Format Code的功能

在commit前要記得要符合程式碼巢狀格式

### 開發新能
為了在開發新功能後在master branch可以運作

1. 在開發新功能，建議開一個新的git branch
2. 完成功能可運作之後在merge到master branch
3. 再push到Github

#### 開新branch
`git checkout -b <branch name>`

#### 提交commit
新增所有更變的檔案

`git add .`

提交更變的檔案

`git commit -m "提交的訊息"`

#### push到github
上傳到github

`git push`

如果有問題可以試試看這個，上傳所有分支

`git push --all`

#### 合併到master分支
完成新功能要給其他人時使用

`git merge 分支名稱`

merge完之後記得切換到開發的branch再繼續開發

`git checkout 要切換分支名稱`

查看目前branch的名稱

`git branch`

#### 合併到開發的分支
別人開發的功能，上傳到master然後merge到自己的開發的branch

`git merge 開發的分支名稱`

####如果發生conflict
可以看code有哪些地方衝突修正之後再commit
