<?php


// // Файлы phpmailer
// require 'phpmailer/PHPMailer.php';
// require 'phpmailer/SMTP.php';
// require 'phpmailer/Exception.php';


// $title = "Новый клиент!";
// // $file = $_FILES['file'];

// $c = true;
// // Формирование самого письма
// $title = "Новый клиент !!!";
// foreach ( $_POST as $key => $value ) {
//   if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
//     $body .= "
//     " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
//       <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
//       <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
//     </tr>
//     ";
//   }
// }

// $body = "<table style='width: 100%;'>$body</table>";

// // Настройки PHPMailer
// $mail = new PHPMailer\PHPMailer\PHPMailer();

// try {
//   $mail->isSMTP();
//   $mail->CharSet = "UTF-8";
//   $mail->SMTPAuth   = true;
//   // $mail->SMTPDebug = 3;

//   // Настройки вашей почты
//   $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
//   $mail->Username   = 'indecotest01@gmail.com'; // Логин на почте
//   $mail->Password   = 'wrhqonprskgxqkrl'; // Пароль на почте
//   $mail->SMTPSecure = 'ssl';
//   $mail->Port       = 465;

//   $mail->setFrom('indecotest01@gmail.com', 'Заявка с вашего сайта'); // Адрес самой почты и имя отправителя

//   // Получатель письма
//   // $mail->addAddress('pasegrosh@gmail.com');
//   $mail->addAddress('bratnu3615@yandex.ru');

//   // // Прикрипление файлов к письму
//   // if (!empty($file['name'][0])) {
//   //   for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
//   //     $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
//   //     $filename = $file['name'][$ct];
//   //     if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
//   //         $mail->addAttachment($uploadfile, $filename);
//   //         $rfile[] = "Файл $filename прикреплён";
//   //     } else {
//   //         $rfile[] = "Не удалось прикрепить файл $filename";
//   //     }
//   //   }
//   // }

 

//   // Отправка сообщения
//   $mail->isHTML(true);
//   $mail->Subject = $title;
//   $mail->Body = $body;

//   $mail->send();

// } catch (Exception $e) {
//   $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
// }



//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'indecotest01@gmail.com';                     //SMTP username
    $mail->Password   = 'wrhqonprskgxqkrl';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('indecotest01@gmail.com', 'Mailer');
    $mail->addAddress('pasegrosh@gmail.com', 'Joe User');     //Add a recipient
    $mail->addAddress('bratnu3615@yandex.ru');               //Name is optional
    $mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');

    //Attachments
    $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}