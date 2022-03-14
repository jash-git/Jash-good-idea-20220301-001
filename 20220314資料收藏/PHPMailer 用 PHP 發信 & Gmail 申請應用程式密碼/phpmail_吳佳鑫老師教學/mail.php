<?php
     $from_name = 'xxx';
     $from_email = 'xxx@126.com';
     $headers = 'From: $from_name <$from_email>';
     $body = 'This is a test mail';
     $subject = 'Test email from php mail()';
     $to = 'xxx@xxx.com';
     if (mail($to, $subject, $body, $headers)) {
         echo "success!";
     } else {
         echo "fail…";
     }
 ?>