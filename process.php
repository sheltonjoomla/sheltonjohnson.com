<?php
			$email = $_POST['email'];
			// $phone = $_POST['phone'];
			$message = $_POST['message']; 
			/// combines all info from FORM // how is will show in email 
			$formcontent="From: $email \n <br>  message: $message \n<br>";
			/// header info for user email 
			$form = 'noreply@sheltonjohnson.com';
			$to = 'scj777@gmail.com';
			$subject = "$name has contacted you from SJ.com";
			$email_headers  = 'MIME-Version: 1.0' . "\r\n";
			$email_headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
			// the rest of the additional headers are like the earlier examples
			$email_headers .= 'From: noreply@sheltonjohnson.com' . "\r\n";
			/*  autoresponder subject */
			$respond_subject = "Thank you for your interest";
			/*  autoresponder message */
			 $respond_message = ''; 

		/* Send message to user*/
		mail($email, $respond_subject, $respond_message, $headers);
			/* Send message to Admin*/
			if (mail($to, $subject, $formcontent, $email_headers)) {
				 	 header('Location: index.php');
			} else {
				echo 'Problem';
			}
		?>
