<?php   

$con = mysqli_connect("localhost","root", "", "cms");
if(!$con){
    echo "Failed".mysqli_connect_errno();
}

$employee_id= $_POST["employee_id"];
$emp_name =  mysqli_real_escape_string($con, $_POST["emp_name"]);
$compliancestatus =  mysqli_real_escape_string($con, $_POST["compliancestatus"]);
$services = mysqli_real_escape_string($con, $_POST["services"]);
$email = mysqli_real_escape_string($con, $_POST["email"]);
$contact = mysqli_real_escape_string($con, $_POST["contact"]);
$password = mysqli_real_escape_string($con, $_POST["password"]);


$query = "INSERT INTO employees VALUES ($employee_id,'$emp_name','$compliancestatus', '$services', '$email', '$contact', '$password')";

$result = mysqli_query($con,$query);

if($result===false){
    echo "error";
    echo mysqli_error($con);
}else{
    echo "Client Updated";
}
// header("Location: ../login_form.php");

?>