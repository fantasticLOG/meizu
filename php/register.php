<?php
$telephone=$_POST["telephone"];
$coon=mysqli_connect("localhost","root","","k");
$sql="insert into telephone(phone) values('$telephone')";
$result=mysqli_query($coon,$sql);
if($sql){
    echo"<script>alert('注册成功');location.href='../login.html';</script>";
    }else{
        echo"<script>alert('注册失败');location.href='register.html';</script>";
    }
?>