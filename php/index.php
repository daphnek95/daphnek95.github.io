<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $subject = $_POST['subject'];
  $from = 'From: Contact Request from Daphnelizabeth Studio';
  $to = 'contact@daphnelizabeth.studio';

  $body = "From: $name\n Email: $email\n Subject: $subject\n Message: $message";

  if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) {
      echo '<p>Thanks for reaching out!</p>';
    } else {
      echo '<p>Oh no! Looks like there was a problem, go back and try again.</p>';
    }
  }
?>
