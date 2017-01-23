## Create gh-pages branch 

in a new folder:

`git clone --no-checkout https://github.com/AlexAbramov/ng2-webpack-vscode-seed.git`

`cd ng2-webpack-vscode-seed`

`git checkout --orphan gh-pages`

`git rm -rf .`

copy the files from 'dist' folder to 'ng2-webpack-vscode-seed' one and add the files to git:

`git add *`

`git commit -m "demo"`

`git push origin gh-pages`

