##### 20240521

- [ ] 使用 obsidian 生成当天日报，默认会有一个换行
- [ ] 运行 @@SETRBPATH@@ 时，如果没有输入参数，会将其置为空，导致 _getPath 函数拼接出 "当前命令执行的路径"
- [x] 拆分 _getPath 为两个函数，一个用于读取 ENV 中存储的路径，与 _setPath 函数对应；另一个用于拼接路径得出当前日志文件的路径