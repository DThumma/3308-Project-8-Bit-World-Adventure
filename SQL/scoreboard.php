<?php

$conn = mysql_connect("localhost", "root", "d051514793");
mysql_select_db("scores");

$sql = "SELECT * FROM board";
$result = $conn->query($sql);

echo "<table>";
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo $row["Username"]. " " . $row["Australia"]. " " . $row["Brazil"]. " " . $row["Canada"]. " " . $row["France"]. " " . $row["Germany"]. " " . $row["Greenland"]. " " . $row["India"]. " " . $row["Indonesia"]. " " . $row["Iran"]. " " . $row["Iraq"]. " " . $row["Israel"]. " " . $row["Italy"]. " " . $row["Japan"]. " " . $row["Mexico"]. " " . $row["Nigeria"]. " " . $row["North Korea"]. " " . $row["Russia"]. " " . $row["Saudi Arabia"]. " " . $row["Somalia"]. " " . $row["South Africa"]. " " . $row["South Korea"]. " " . $row["Spain"]. " " . $row["Sweden"]. " " . $row["Switzerland"]. " " . $row["USA"]. " " . $row["Vietnam"]. "<br>";
    }
} else {
    echo "0 results";
}

echo "</table>";
mysql_close();
?>
