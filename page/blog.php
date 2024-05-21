<?php
include 'config.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daniel Pijalu - Blog</title>

    <link rel="stylesheet" href="../style/blog.css">
</head>
<body>
    <div class="container">
        <nav>
            <div class="logo">
                <h4>niel<span>pialu</span></h4>
            </div>
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="#" class="active">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </div>

    <div class="articles">
        <div class="header">
            <h1>Articles</h1>
        </div>
        <div class="article-container">
             <?php
    $query = "SELECT * FROM artikel";
    $result = mysqli_query($conn, $query);

    $no = 1;

    if ($result) {
        while ($row = mysqli_fetch_assoc($result)) {
            if ($no >=0) {
            ?>
            <div class="article-section">
                <h2 class="title"><?= $row["judul"] ?></h2>
                <h4 class="source">Source : <a href="<?= $row["source"] ?>">Link</a></h4>
                <div class="paragraph">
                    <h4 class="paragraph-title"><?= $row["judul1"] ?></h4>
                    <p><?= $row["penjelasan1"] ?> </p>
                    </div>
                <div class="paragraph">
                    <h4 class="paragraph-title"><?= $row["judul2"] ?></h4>
                    <p><?= $row["penjelasan2"] ?></p></div>
            </div>
            <?php } 
            $no++;
        }
    } else {
        echo "Error: " . $query . "<br>" . mysqli_error($conn);
    } ?>
    
            
        </div>
    </div>
   

    <footer class="footer">
        <p>&copy; 2024 nielpijalu. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>