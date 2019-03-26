<?php
$telephone=$_GET["telephone"];
$pwd=$_GET["pwd"];
$coon=mysqli_connect("localhost","root","","k");
$row="insert into tel(phone,pwd) values('$telephone','$pwd')";
$result=mysqli_query($coon,$row);
if($row){
echo"<script>alert('注册成功');location.href='../login.html';</script>";
}else{
    echo"<script>alert('注册失败');location.href='../register.html';</script>";
}
?>