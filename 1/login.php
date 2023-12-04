<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // 读取现有用户数据
    $userData = json_decode(file_get_contents("users.json"), true);

    // 查找用户
    $user = null;
    foreach ($userData["users"] as $u) {
        if ($u["username"] == $username) {
            $user = $u;
            break;
        }
    }

    if ($user !== null && password_verify($password, $user["password"])) {
        echo json_encode(["status" => "success", "message" => "登录成功"]);
        // 在这里可以设置用户的会话，以保持登录状态
    } else {
        echo json_encode(["status" => "error", "message" => "用户名或密码不正确"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "非法请求"]);
}
?>
