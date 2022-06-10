### 基础组件:

#### shell_command_executor.py

- 在python中封装subprocess模块运行可执行程序, 将运行输出打印到logging中

#### worker_thread.py

- 封装命令模式, 通过putTask往worker线程里丢任务, worker线程会依次执行任务. task类要支持execute()函数


### workflow相关组件:

#### 基本概念

以下面的目录结构为例, workflow目录为工作流的top目录, step01目录和step02目录分别代表一个工作节点(WorkflowNode)
```
workflow
├── step01
│   ├── step01_test01.sh
│   ├── step01_test02.sh
│   └── test.txt
└── step02
    ├── step02_test01.sh
    ├── step02_test02.sh
    └── test.txt
```

#### workflow_node.py

- 实现工作流节点类WorkflowNode, 遍历对应的工作流节点目录(例如step01或step02), 执行目录中的可执行程序
- 例如创建WorkflowNode("workflow/step01"), 会遍历workflow/step01目录下的所有可执行程序, 并在调用run时执行各个可执行程序(并行执行)
- 依赖shell_command_executor.py

#### workflow_node_set.py

- 实现工作流类WorkflowNodeSet, 遍历对应的工作流目录(例如workflow), 创建工作流节点(根据子目录, 例如step01, step2), 依次执行各个工作流节点(工作流节点之间串行执行)
- 例如创建WorkflowNodeSet("workflow"), 会遍历workflow目录下的所有子目录, 例如step01和step02, 然后创建WorkflowNode("workflow/setp01")和WorkflowNode("workflow/setp02")工作流节点, 
- 各个工作流节点之间是串行的, 即执行完WorkflowNode("workflow/step01")后, 才会执行WorkflowNode("workflow/setp02"), 工作流节点之间的先后顺序按照子目录名的字典顺序来,
- 依赖workflow_node.py

#### workflow_service.py & main.py

- 实现工作流服务类WorkflowService, 监听SIGUSR1, 每次收到SIGUSR1会触发启动一次工作流任务(prework -> workflow -> postwork), 
- main.py中初始化日志workflow.service.log.*, 启动定时任务, 依赖python第三方库schedule

#### start_workflow_service.sh & stop_workflow_service.sh

- 启动停止workflow service脚本

#### start_workflow_service_monitor.sh & stop_workflow_service_monitor.sh & workflow.service

- start_workflow_service_monitor.sh: workflow启动及监控脚本, 
- stop_workflow_service_monitor.sh: workflow停止和停止监控脚本
- workflow.service: workflow service配置文件(cp到/lib/systemd/system/目录下)
    ```
    $ sudo systemctl daemon-reload
    $ sudo systemctl start workflow.service
    $ sudo systemctl enable workflow.service
    ```
