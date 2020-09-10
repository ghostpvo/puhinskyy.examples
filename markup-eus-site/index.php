<!doctype html>
<html lang="ru">
	<?php include_once ('inc/head.tpl') ?>

	<style type="text/css">
		body {
			padding: 40px 15px 450px;
		}

		h1 {
			padding-bottom: 15px;
			margin-bottom: 15px;
			text-align: center;
			border-bottom: 1px solid #ccc;
		}

		h2 {
			margin: 30px 0 0;
			font-weight: 300;
		}

		.icon-check2 {
			display: inline;
			vertical-align: middle;
			font-size: 12px;
		}

		a {
			display: inline;
			font-size: 16px;
			color: @decor_clr;
		}

		a:hover {
			text-decoration: none;
			color: @main_clr;
		}

		ul {
			padding: 10px;
			padding-left: 0;
		}

		li {
			position: relative;
			margin: 2px 0;
			padding-left: 10px;
			line-height: 1.3;
			list-style: none;
			text-transform: uppercase;
		}

		li:before {
			position: absolute;
			left: 0;
			top: 0;
			content: '- ';
			color: @decor_clr;
			line-height: 1.3;
		}

		.has-parent {
			margin-left: 40px;
		}

		.not-ready a {
			text-decoration: none;
			cursor: default;
			color: #666;
		}

		.not-ready li:before {
			color: #666;
		}

		@media only screen and (max-width: 480px) {
			body {
				padding: 10px;
			}

			h1 {
			    padding-bottom: 10px;
			    margin-bottom: 10px;
			}

			h2 {
    			margin: 10px 0 0;
    		}

    		ul {
			    padding: 0px 10px 10px;
			}
		}
	</style>

<body>
	<h1>Верстка ЕЮС / Список страниц</h1>
	<ul>
		<li><a href="home.php">Главная страница</a></li>
		<li><a href="lawers.php">Юристы</a></li>
		<li><a href="historys.php">Истории</a></li>
		<li><a href="tarifs.php">Тарифы</a></li>
		<li><a href="legal-entities.php">Юр. лицам</a></li>
		<li><a href="card.php">Карта</a></li>
		<li><a href="knowleges-base.php">База знаний</a></li>
		<li><a href="about.php">О нас</a></li>
		<li><a href="partners-program.php">Партнерская программа</a></li>
	</ul>
	<h2>Карты</h2>
	<ul>
		<li><a href="card-personal.php">Personal</a></li>
		<li><a href="card-teenager.php">Тинейджер</a></li>
		<li><a href="card-for-parents.php">Забота о родителях</a></li>
		<li><a href="card-family.php">Family</a></li>
		<li><a href="card-business.php">Business</a></li>
		<li><a href="card-business-man.php">Business Man</a></li>
		<li><a href="card-business-woman.php">Business Woman</a></li>
	</ul>

<!-- <h2></h2>
	<ul>
		<li><a href=""></a></li>
	</ul>
	<div class="has-parent">
		<h2></h2>
		<ul>
			<li><a href=""></a></li>
		</ul>
	</div> -->

	<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
	<script type="text/javascript">
		$('.not-ready a').on('click', function(e){
			e.preventDefault();
		});
	</script>

</body>
</html>