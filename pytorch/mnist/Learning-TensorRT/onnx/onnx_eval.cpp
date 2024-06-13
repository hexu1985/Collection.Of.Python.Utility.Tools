#include <array>
#include <algorithm>
#include <opencv2/opencv.hpp>
#include <onnxruntime_cxx_api.h>

int main(int argc, char* argv[])
{
    // 模型设置和推理结果
    Ort::Env env(ORT_LOGGING_LEVEL_WARNING, "Default");

    // CPU
    const char* model_path = "MNIST.onnx";
    Ort::Session session{env, model_path, Ort::SessionOptions{nullptr}};

    // 模型输入尺寸
    static constexpr const int height = 28; //model input height
    static constexpr const int width = 28; //model input width
    Ort::Value input_tensor{nullptr};
    std::array<int64_t, 4> input_shape{1, 1, height, width}; //mode input shape NCHW = 1x1xHxW

    // 模型输出尺寸
    Ort::Value output_tensor{nullptr};
    std::array<int64_t, 2> output_shape{1, 10}; //model output shape,

    // 读取图片
    cv::Mat img;
    std::string file_name = "img/img0.png";
    if (argc >= 2) {
        file_name = argv[1];
    }
    std::array<float, width * height> input_image{};
    std::array<float, 10> results{};
    int result{0};

    // 模型输入输出张量设置
    auto memory_info = Ort::MemoryInfo::CreateCpu(OrtDeviceAllocator, OrtMemTypeDefault);
    input_tensor = Ort::Value::CreateTensor<float>(memory_info, input_image.data(), input_image.size(), input_shape.data(), input_shape.size());
    output_tensor = Ort::Value::CreateTensor<float>(memory_info, results.data(), results.size(), output_shape.data(), output_shape.size());

    // 查看模型输入输出的名称
    const char* input_names[] = {"input"};
    const char* output_names[] = {"output"};

    // 推理
    session.Run(Ort::RunOptions{nullptr}, input_names, &input_tensor, 1, output_names, &output_tensor, 1);

    // 获取结果
    result = std::distance(results.begin(), std::max_element(results.begin(), results.end()));

    return 0;
}
