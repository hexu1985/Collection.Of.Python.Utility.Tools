
### conda安装onnx

```shell
$ conda install -c conda-forge onnx
```

### 模型训练

```shell
$ python train.py
```

### pytorch模型推理

```shell
$ python eval.py
```

或者

```shell
$ bash eval.sh
```

### pytorch模型 转 onnx模型

```shell
$ python torch2onnx.py
```

### onnx模型 转 tensorrt模型

```shell
$ cd tensorrt
$ bash build_by_cmake.sh
$ build/onnx2tensorrt
```

### tensorrt模型推理

```shell
$ cd tensorrt
$ bash build_by_cmake.sh
$ build/tensorrt_eval
```
