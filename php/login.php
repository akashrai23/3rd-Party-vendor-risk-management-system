<?php
$emp_name = $_POST["emp_name"];
$password = $_POST["password"];

$con = mysqli_connect("localhost","root", "", "cms");
if(!$con){
    echo "Failed".mysqli_connect_errno();
}
$emp_name = mysqli_real_escape_string($con, $emp_name);
$password = mysqli_real_escape_string($con, $password);

$query = "SELECT * FROM employees WHERE emp_name = '$emp_name' AND password = '$password'";

$result = mysqli_query($con,$query);

$row=mysqli_fetch_array($result);
if($result===false){
    echo "error";
    echo mysqli_error($con);
}
session_start();
if($row[0]){
    $_SESSION["employee_id"] = $row[0];
    $_SESSION["user"] = $row[1];
    $_SESSION["login_status"] = "logged";
    header("Location: ../vendor.php");
}else{
    $_SESSION['login_error']="No user found!";
    header("Location: ../login_form.php");
}

?>