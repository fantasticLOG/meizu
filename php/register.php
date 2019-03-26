<?php
$telephone=$_POST["telephone"];
$pwd=$_POST["pwd"];
$coon=mysqli_connect("localhost","root","","k");
$sql="insert into telephone(phone) values('$telephone')";
$selectSql = "select phone from telephone";
$result=mysqli_query($coon,$sql);
$flag = false;//表示手机号码不存在 
	while($resultArr = mysqli_fetch_array($row)){
		if($telephone == $resultArr["phone"]){
			$flag = true;//表示手机号码存在
			break;
		};
	}
	if($flag){//表示手机号码存在
		echo "<script>alert('手机号码已存在，请重新注册');location.href = '../register.html';</script>";
	}else{//手机号码不存在，可以注册
		//定义插入的sql语句
		$sql = "insert into telephone (phone,pwd) values ('$telephone','$pwd')";
		//执行sql语句
		$result = mysqli_query($coon,$sql);
		
		if($result){
			//插入成功，注册成功
			//跳转到登录页
			echo "<script>alert('注册成功');location.href = '../login.html';</script>";
		}else{
			echo "<script>alert('注册失败');location.href = '../register.html';</script>";
		}
	}
?>

