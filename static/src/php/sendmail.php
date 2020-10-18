<?php

//Change this to your email
$to_myemail = 'romain@romainodet.fr';


function my_set_error($json, $msg_desc, $field = null, $field_msg = null)
{
  $json['status'] = 'error';
  $json['status_desc'] = $msg_desc;
  if(!empty($field)){
    $json['error_msg'][$field] = $field_msg;
  }
  return $json;
}

function my_validation($json, $from, $phone, $message)
{
  $msg_desc = "Entrée invalide!";
  if (empty($from)) {
    $json = my_set_error($json, $msg_desc, 'f_email', 'Email requis!');
  } elseif (!filter_var($from, FILTER_VALIDATE_EMAIL)) {
    $json = my_set_error($json, $msg_desc, 'f_email', 'Format d\'email incorrect!');
  }
  if (empty($phone)) {
    $json = my_set_error($json, $msg_desc, 'f_phone', 'Téléphone requis!');
  }
  if (empty($message)) {
    $json = my_set_error($json, $msg_desc, 'f_message', 'Un message est requis!');
  }
  return $json;
}




$json = array(
  'status' => "success",
  'status_desc' => 'Merci! Votre message sera traité dans les plus brefs délais!',
  'error_msg' => array(
    'f_email' => '',
    'f_phone' => '',
    'f_message' => '',
  )
);

$from     = !empty($_POST['f_email']) ?  $_POST['f_email'] : '';
$phone    = !empty($_POST['f_phone']) ?  $_POST['f_phone'] : '';
$message  = !empty($_POST['f_message']) ? $_POST['f_message'] : '';
$subject  = !empty($_POST['f_subject']) ? $_POST['f_subject'] : 'General';

$json = my_validation($json, $from, $phone, $message);

$message = 'Email: '.$from . ', Phone: '.$phone.', Message: ' . $message;
$headers = 'Reply-To: '.$from;  

if ($json['status']  === 'success') {  
  if (!@mail($to_myemail, $subject, $message,  $headers)) {
    $m_err = error_get_last()['message'];  
    $json = my_set_error($json, 'Unable to send Email! '.$m_err);
  }  
}

echo json_encode($json);
