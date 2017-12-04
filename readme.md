1.git简述
   版本控制器
   集中式：svn
   分佈式：git
2.git具体操作
	(1)初始化仓库
		git init 
	(2)添加文件到仓库(可以添加多个文件)
		git add index.html
	(3)提交文件到仓库//这里的注释必须要写 否则会报错
		git commit -m '注释'
	(4)查看状态
		git status
	(5)查看文件具体变化
		git diff
	(6)查看历史版本
		git log
	(7)进入历史某个版本(慎用)
		git reset --hard HEAD^
		git reset --hard code
	(8)工作区与暂存区
		工作区：代码区
		暂存区：git add的区域，当你git commit 把暂存区的内容提交到仓库
	(9)创建分支
		创建分支：git checkout -b dev
		查看分支：git branch
		合并子分支：git merge dev
		分支之间的切换：git checkout master
		删除子分支： git branch -d dev
	(10)冲突
		产生冲突的原因：子分支和主分支同时都修改了内容
		解决方案：手动将子分支和主分支的内容保存下来
					合并分支，删除子分支
	(11)远程仓库
		GitHub：个人的，独立的
		码云：团队协作
