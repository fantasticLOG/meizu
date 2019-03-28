<?php
header("Access-Control-Allow-Origin:*");
   include('connet_db.php');
   // 获取传递的信息
   // formData $_POST
   // php获取json字符串解析方式
   $data = file_get_contents('php://input');
   
   $data = json_decode($data);
   $username = $data -> username;
   $password = $data -> password;
   $sql = "select * from tel where phone='$username' and pwd='$password'";
   // var_dump($sql);
   $db = new DB();
   $result = $db -> fetch($sql, "object");
   // var_dump($result);
   if($result) {
       // 获取到用户
       $arr = array("code"=>200, "data" => array("id" => $result->id), "msg" => "");
   } else {
       // 没获取到
       $arr = array("code"=>0, "msg" => "用户名或者密码输入错误");
   }
   
   echo json_encode($arr);

?>