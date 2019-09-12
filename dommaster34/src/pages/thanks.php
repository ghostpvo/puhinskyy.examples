<?php
	 $contact = htmlspecialchars($_POST["contact"]);
	 $data = htmlspecialchars($_POST["data"]);
	 $headers = "Content-type: text/plain; charset=\"utf-8\"";
	 $to_mail = "kirillov@dommaster34.ru" . ", " ;
	 $to_mail .= "sales@dommaster34.ru";
	 $from = "Строительство домов под «ключ»";
	 $subject = "Заявка";
	 $message = "Контакт: $contact;\nДанные: $data;";
	 mail($to_mail, $subject, $message, $headers);
?>

<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Спасибо|Заявка принята</title>
		<link href="css/styles.min.css" rel="stylesheet" type="text/css">
	</head>
	<body class="thanks-page">
        <haader class="site-header">
            <div class="b-wrap">
                <div class="site-header__contacts">
                    <div class="site-header__location">
                        <span class="site-header__region">г. Волгоград и область</span>
                        <span class="site-header__street">ул. Историческая 181 д</span>
                    </div>
                    <a href="/" class="site-header__logo">
                        <img src="img/logo.png" alt="">
                    </a>
                    <div class="site-header__telephone">
                        <div class="site-header__phone-number-wrapper">
                            <a href="tel:+78844200905" class="site-header__phone-number">+7 (8442) 200 509</a>
                        </div>
                        <a href="" class="site-header__order-call show-popup" data-modal="md-order-call">Заказать звонок</a>
                    </div>
                </div>
            </div>
        </haader>

        <div class="firest-screen">
            <div class="b-wrap">
                <p class="firest-screen__welcome">Спасибо за вашу заявку!</p>
                <p class="firest-screen__text">Наш менеджер свяжется с Вами в течение часа</p>
            </div>
        </div>
	</body>
</html>