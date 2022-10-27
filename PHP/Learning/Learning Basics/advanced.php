<!-- mktime(hour, minute, second, month, day, year, is_dst -->
<!-- mktime(0, 0, 0, 1, 1, 2000, 0) -->
<?php
$d=strtotime("10:30pm April 15 2014");
echo "Created date is " . date("Y-m-d h:i:sa", $d);
?>

<!-- H, i, s, d, m, Y = hour, minute, second, day, month, year -->
<!-- h = 12 hour format of an hour with leading zeros -->


<!-- Include files -->

<?php
include 'header.php';
echo "Some text.<br>";
?>

<!-- Read Files -->

<?php
$myfile = fopen("file.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("file.txt"));
fclose($myfile);
?>

<!-- Write Files -->

<?php
$myfile = fopen("file.txt", "w") or die("Unable to open file!");
echo fread($myfile,filesize("file.txt"));
$newtxt = "John Doe\n";
fwrite($myfile, $newtxt);
fclose($myfile);
?>

<!-- Delete Files -->
<?php
unlink("file.txt");
?>

<!-- Create a Directory -->
<?php
mkdir("newdir");
?>

<!-- Delete a Directory -->
<?php
rmdir("newdir");
?>

<!--  -->

<?php
$myfile = fopen("webdict.txt", "r");
while(!feof($myfile)) {
  echo fgetc($myfile);
}
?>

<!-- File Upload -->

<?php
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
}
?>
