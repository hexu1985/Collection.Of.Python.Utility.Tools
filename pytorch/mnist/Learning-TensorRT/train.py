import torch
from torch import nn
from torchvision import datasets, transforms
from model import CNN

# 这里为了简化runtime的步骤，不对图像进行归一化处理
transform = transforms.Compose([transforms.ToTensor()])

train_data = datasets.MNIST(root = "./data/",
                            transform=transform,
                            train = True,
                            download = True)

test_data = datasets.MNIST(root="./data/",
                           transform = transform,
                           train = False)

train_loader = torch.utils.data.DataLoader(train_data,batch_size=64,
                                          shuffle=True,num_workers=2)
test_loader = torch.utils.data.DataLoader(test_data,batch_size=64,
                                          shuffle=True,num_workers=2)

net = CNN()

import torch.optim as optim
criterion = nn.CrossEntropyLoss()
optimizer = optim.SGD(net.parameters(), lr=0.001, momentum=0.9)

device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
net = net.to(device)
for epoch in range(20):
    running_loss = 0.0
    total_num, total_cor = 0,0
    for i,data in enumerate(train_loader,0):#0是下标起始位置默认为0
        #inputs,labels = data
        inputs,labels = data[0].to(device), data[1].to(device)
        #初始为0，清除上个batch的梯度信息
        optimizer.zero_grad()         

        #前向+后向+优化     
        outputs = net(inputs)
        loss = criterion(outputs,labels)
        loss.backward()
        optimizer.step()

        # loss 的输出，每个一百个batch输出，平均的loss
        running_loss += loss.item()
        if i%100 == 99:
            print('[%d,%5d] loss :%.3f' %
                 (epoch+1,i+1,running_loss/100))
            running_loss = 0.0

        correct = 0
        total = 0
        _, predicted = torch.max(outputs.data, 1)
        total = labels.size(0)# labels 的长度
        total_num = total_num + total
        correct = (predicted == labels).sum().item() # 预测正确的数目
        total_cor = total_cor + correct

    print("正确率：" + str(total_cor/total_num))


print('Finished Training')

PATH = './mnist_net.pt'
torch.save(net.state_dict(), PATH)

print('Saved Model')
