### Pytorch安装

在有anaconda之后我们可以先创建一个环境

```shell
$ conda create -n ML python=3.10
```

环境创建完成之后激活环境

```shell
$ conda activate ML
```

我这里比较懒，直接用base环境了

我们只需要一句话就可以完成Pytorch的安装

```shell
$ pip install torch torch vision torchaudio
```

最后我们使用如下命令测试是否可以使用GPU

```shell
$ python -c "import torch; print(torch.cuda.is_available())
```
