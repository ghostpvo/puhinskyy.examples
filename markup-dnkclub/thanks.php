<?php 
	$how_old = htmlspecialchars($_POST["how_old"]);
	$money = htmlspecialchars($_POST["money"]);
	$name = htmlspecialchars($_POST["user_name"]);
	$phone = htmlspecialchars($_POST["user_phone"]);
	$mail = htmlspecialchars($_POST["user_email"]);
	$headers = "Content-type: text/plain; charset=\"utf-8\"";
	$to_mail = "vyacheslav@dnk.bz";
	$from = "DNK-Club";
	$subject = "Заявка на практикум";
	$message = "Имя: $name;\nТелефон: $phone;\nПочта: $mail;\nВозраст бизнеса: $how_old лет;\nВ сумме потрачено: $money";
	mail($to_mail, $subject, $message, $headers);
?>

<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Спасибо|Заявка принята</title>
		<link href="css/main.css" rel="stylesheet" type="text/css">
	</head>
	<body class="thanks-page">
		<div class="b-wrap">
			<h2 class="b-hdr">Спасибо за вашу заявку, <?php echo htmlspecialchars($_POST["user_name"]) ?>!</h2>
			<p>Наш менеджер свяжется с вами в ближайшее время.</p>
			<a href="index.php" class="b-mainbtn">Вернуться на сайт</a>
		</div>
	</body>
</html>