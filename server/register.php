<?php
header("Access-Control-Allow-Origin:*");
$telephone=$_GET["telephone"];
$pwd=$_GET["pwd"];
$coon=mysqli_connect("localhost","root","","k");
// $row="insert into tel(phone,pwd) values('$telephone','$pwd')";
$selectSql="select phone from tel";
$row = mysqli_query($coon,$selectSql);
$flag = false;//表示用户名不存在 
	while($resultArr = mysqli_fetch_array($row)){
		if($telephone == $resultArr["phone"]){
			$flag = true;//表示用户名存在
			break;
		};
	}
	if($flag){//表示用户名存在
		echo "<script>alert('用户名已存在，请重新注册');location.href = '../app/register.html';</script>";
	}else{//用户名不存在，可以注册
		//定义插入的sql语句
		$sql = "insert into tel (phone,pwd) values ('$telephone','$pwd')";
		//执行sql语句
		$result = mysqli_query($coon,$sql);
		
		if($result){
			//插入成功，注册成功
			//跳转到登录页
			echo "<script>alert('注册成功');location.href = 'http://localhost:3333/login.html';</script>";
		}else{
			echo "<script>alert('注册失败');location.href = '../app/register.html';</script>";
		}
	}
?>