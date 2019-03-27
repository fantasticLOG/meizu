<?php
$tel=$_POST["telephone"];
$pwd=$_POST["pwd"];
$coon=mysqli_connect("localhost","root","","k");
$selectsql="select * from tel";
$result=mysqli_query($coon,$selectsql);
if($result){
    echo"<script>alert('登录成功');location.href='../app/home.html';</script>";
}else{
    echo"<script>alert('登录失败');location.href='../app/home.html';</script>";
}
?>