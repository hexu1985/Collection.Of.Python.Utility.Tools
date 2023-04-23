### shell命令行执行器

封装subprocess.Popen

- [最简单版本](simple)
- [最简单版本增加设置环境变量](simple_pass_env)
- [最简单版本增加超时退出, 但有问题](simple_with_timeout_failed)
- [最简单版本增加超时退出, 手动kill所有子孙进程修复版](simple_with_timeout_fixed)
- [实现命令的stderr和stdout统一通过print_func打印, 基于os.pipe](print_func_os_pipe)
- [实现命令的stderr和stdout统一通过print_func打印, 基于subprocess.PIPE](print_func_subprocess_pipe)
- [实现命令的stderr和stdout统一通过print_func打印, 增加超时退出](print_func_with_timeout)
- [实现命令的stderr和stdout统一打印到日志文件, 增加超时退出](log_file_with_timeout)
- [实现命令的stderr和stdout统一打印到日志文件, 增加超时退出, 设置环境变量](log_file_with_timeout_pass_env)
