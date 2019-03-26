<?php
$telephone=$_GET["telephone"];
$sql = "select id from tel where phone='$telephone'";
        include('connet_db.php');
            $db = new DB();
            $result = $db -> fetch($sql, "object");
            if($result) {
                // 用户与存在
                $arr = array("code" => "0", "msg" => "用户名称已经存在");
            } else {
                // 用户不存在
                $arr = array("code" => "200", "msg" => "");
            }
            echo json_encode($arr);
?>

