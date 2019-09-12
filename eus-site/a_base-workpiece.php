<!doctype html>
<html lang="ru">

<?php include_once ('inc/head.tpl') ?>

<body>

	<?php include_once ('inc/header.tpl') ?>
	
	<main class="b-page-contens b-wrap">

		<!-- Меню со вкладками -->
		<div class="m-tabs-selection">
			<ul class="selectors-list">
				<li class="active"><a href="">Tab 1</a></li>
				<li><a href="">Tab 2</a></li>
			</ul>
			<div class="tabs-contens-wrap">
				<div class="tab-contens">
					<p>1</p>
				</div>
				<div class="tab-contens">
					<p>2</p>
				</div>
			</div>
		</div>

		<!-- Скрывающийся текстовый блок -->
		<div class="m-big-info-slide">
			<header class="slide-header"><span></span></header>
			<div class="slide-contens">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt aut, tempore sed dolorum adipisci, consequatur dolore ratione sequi aspernatur veritatis. Laudantium et ipsa, voluptatem ullam voluptate quas recusandae at a.</p>
			</div>
		</div>

		<!-- Выпадающее меню -->
		<div class="m-dropdown-parent">
			<span>
				<span>Выпадающее меню</span>
				<i class="icon-caret-down"></i>
			</span>
			<ul class="mdp-dropdown-menu">
				<li><a href="">1</a></li>
				<li><a href="">2</a></li>
				<li><a href="">3</a></li>
			</ul>
		</div>

		<!-- Модальное окно -->
		<a href="" class="modal-wind-show" data-type="md-windowid">Модальное окно</a>
		<div id="md-windowid" class="m-modal-window-wrap">
			<div class="window-contens">
				<a href="" class="close-md-window" title="Закрыть">X</a>
				<h3>Заголовок окна</h3>
				<p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, sint sapiente fuga voluptates delectus? Nisi sed blanditiis nulla eos sapiente sequi, temporibus facilis accusantium impedit hic velit, quas obcaecati odit!</span>
				<span>Consequatur, odit quam magnam obcaecati temporibus odio aspernatur voluptatem. Quia, debitis earum. Porro velit ut quas minus nam fuga laudantium ipsa fugit magni. Eaque perspiciatis ut repellendus ipsa officiis sequi.</span>
				<span>Rem consequatur odit obcaecati sequi, error animi incidunt mollitia temporibus laudantium eaque, cupiditate quam, beatae quos illo, alias fuga doloremque. Temporibus vitae ab tempora nihil libero ducimus. Qui, asperiores, accusantium!</span>
				<span>Fugiat velit illo praesentium repellendus. Minima incidunt officia maxime, voluptates architecto, consequuntur tempora quisquam dignissimos facere quo nesciunt ipsum culpa quae quam. Officia nostrum rerum numquam sapiente quisquam, quod voluptas!</span>
				<span>Vel, placeat veritatis laudantium laborum accusantium animi alias! Ullam alias eos velit est fugiat molestiae tempore libero magnam modi molestias cumque dicta, neque id. Tempora delectus modi consectetur itaque animi.</span>
				<span>Qui autem nisi necessitatibus doloremque, quis libero fuga. Dignissimos architecto, mollitia similique consequatur, beatae explicabo ex expedita doloribus rerum soluta quidem ipsa. Perferendis sed inventore, reiciendis recusandae exercitationem aliquam quidem?</span>
				<span>Voluptate, neque, animi dolorum velit rem eum quod, laborum architecto accusantium labore iste dolorem vero harum reprehenderit! Aliquid dolores, unde odio reiciendis quo, minus possimus neque, voluptates vel ut iure.</span>
				<span>Ex blanditiis iure quia veniam iste, id nam molestiae. Architecto omnis expedita, minus doloremque reiciendis voluptatibus nihil, magni quibusdam facilis debitis non deserunt officiis reprehenderit error, esse iste ut molestias.</span>
				<span>Dicta expedita aut, distinctio esse neque consequuntur, corporis libero voluptate eius hic. Minima illo iusto porro ratione atque et cumque ea dolor aspernatur saepe soluta velit, amet, laborum nesciunt enim.</span>
				<span>Eum iste porro cupiditate obcaecati quo possimus ab neque repellat sit molestiae, accusamus quisquam, dolor quaerat eos magni ipsa modi id reprehenderit. Officia minima, velit sunt molestiae repellendus accusantium. Quisquam.</span></p>	
			</div>
		</div>

		<!-- Форма, базовая стилизация -->
		<form>

			<div class="b-radio-unit">
				<label for="rgthrt54rrwd">
					<i class="icon-check"></i>
					<span>Б/У</span>
				</label>
				<input type="radio" checked id="rgthrt54rrwd" name="actual-state" value="Б/У">
			</div>

			<div class="b-checkbox-unit">
				<label for="rgthrtz54rrwd">
					<i class="icon-check"></i>
					<span>Б/У</span>
				</label>
				<input type="checkbox" checked id="rgthrtz54rrwd" name="actual-state" value="Б/У">
			</div>

			<div class="b-file-inp">
				<label for="fileinp-1">
					<span class="not-unploaded">Загрузить фото1</span>
					<span class="unploaded">Загружено 1</span>
				</label>
				<div class="file-info">
					<span></span>
					<i class="icon-cross"></i>
				</div>
				<input type="file" id="fileinp-1">
			</div>
					
		</form>

	</main>

	<?php include_once ('inc/footer.tpl') ?>
	<?php include_once ('inc/modal-wind.tpl') ?>
	<?php include_once ('inc/js.tpl') ?>

</body>
</html>