
### Linux下Nvidia驱动的安装

1.查看Linux系统是否已经安装了Nvidia驱动
命令行输入：nvidia-smi  进行查看：

```
$ nvidia-smi
```

如果输出以下信息，则Linux系统中已经安装了Nvidia驱动。

```
Tue Nov 14 15:29:52 2023
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 510.108.03   Driver Version: 510.108.03   CUDA Version: 11.6     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA GeForce ...  Off  | 00000000:01:00.0  On |                  N/A |
| N/A   51C    P0    21W /  N/A |    876MiB /  6144MiB |      6%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|    0   N/A  N/A      1844      G   /usr/lib/xorg/Xorg                 36MiB |
|    0   N/A  N/A      1981      G   /usr/bin/gnome-shell              100MiB |
|    0   N/A  N/A      2734      G   /usr/lib/xorg/Xorg                367MiB |
|    0   N/A  N/A      2868      G   /usr/bin/gnome-shell               61MiB |
|    0   N/A  N/A      3159      G   /usr/lib/firefox/firefox           82MiB |
|    0   N/A  N/A      3357      G   ...290876582971142579,262144      119MiB |
|    0   N/A  N/A     18243      G   ...RendererForSitePerProcess      102MiB |
+-----------------------------------------------------------------------------+
```
如果没有以上的输出信息，则开始进行Nvidia驱动的安装。

2.下载Nvidia官方驱动程序
查看自己的显卡型号，下载对应的驱动。命令行输入：lspci | grep NVIDIA

```
$ lspci | grep -i nvidia
```
对应输出以下信息：

```
01:00.0 VGA compatible controller: NVIDIA Corporation Device 1f15 (rev a1)
01:00.1 Audio device: NVIDIA Corporation Device 10f9 (rev a1)
01:00.2 USB controller: NVIDIA Corporation Device 1ada (rev a1)
01:00.3 Serial bus controller [0c80]: NVIDIA Corporation Device 1adb (rev a1)
```

我这由于驱动问题，无法显示显卡的具体型号，在下面的网址输入上面第一行的数据1f15，可以看到显卡型号是 GeForce RTX 2060 Mobile

<https://admin.pci-ids.ucw.cz/mods/PC/10de?action=help?help=pci>

从该网址下载与显卡型号对应的显卡驱动程序：[英伟达驱动下载](https://www.nvidia.cn/geforce/drivers/)



- [linux服务器上查看显卡(nvidia)型号](https://zhuanlan.zhihu.com/p/391087399)
- [Linux下Nvidia驱动的安装](https://blog.csdn.net/qq_44961869/article/details/115945912?utm_source=app&app_version=4.6.1)
- [Ubuntu 卸载 Nvidia 驱动和安装最新驱动](https://blog.csdn.net/wm9028/article/details/110268030)
- [Linux下安装cuda和对应版本的cudnn](https://blog.csdn.net/qq_44961869/article/details/115954258)
- [Linux（多用户下）查看cuda、cudnn版本、查看已经安装的cuda版本、切换不同版本cuda之间的切换等相关命令](https://blog.csdn.net/Kefenggewu_/article/details/117675079)
