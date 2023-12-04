<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // 读取现有用户数据
    $userData = json_decode(file_get_contents("users.json"), true);

    // 检查用户名是否已存在
    foreach ($userData["users"] as $user) {
        if ($user["username"] == $username) {
            echo json_encode(["status" => "error", "message" => "用户名已存在，请选择其他用户名"]);
            exit;
        }
    }

    // 在实际应用中，你应该对密码进行加密，这里仅作演示
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // 添加新用户
    $newUser = array("username" => $username, "password" => $hashedPassword);
    $userData["users"][] = $newUser;

    // 将更新后的用户数据写回文件
    file_put_contents("users.json", json_encode($userData));

    echo json_encode(["status" => "success", "message" => "注册成功"]);
} else {
    // 处理非法请求
    echo json_encode(["status" => "error", "message" => "非法请求"]);
}
?>
