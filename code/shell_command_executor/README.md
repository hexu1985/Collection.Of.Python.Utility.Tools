### shell命令行执行器

封装subprocess.Popen

- [最简单版本](simple)
- [最简单版本增加超时退出, 但有问题](simple_with_timeout_failed)
- [最简单版本增加超时退出, 手动kill所有子孙进程修复](simple_with_timeout_killpg_manual)
- [最简单版本增加超时退出, 基于进程组方式修复](simple_with_timeout_killpg_setpgrp)
- [实现命令的stderr和stdout统一通过print_func打印](print_func)
- [实现命令的stderr和stdout统一通过print_func打印, 增加超时退出](print_func_with_timeout)
- [实现命令的stderr和stdout统一打印到日志文件, 增加超时退出](log_file_with_timeout)
