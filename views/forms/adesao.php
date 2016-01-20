<div class="a-side">
	<div class="a-aside__header">
	    <h5>Adesão</h5>
	    Turim Hoteis ....
	    <a class="a-btn a-btn-light">Adesão <i class="fa fa-chevron-right"></i></a>
	</div>
	<div class="a-aside__content">
		<?php if(have_rows('vantagens_adesao')): ?>
			<ul class="a-aside__list">
				<li>Vantagens</li>
				<?php while( have_rows('vantagens_adesao') ): the_row(); ?>
					<li> <?php the_sub_field('vantagem_adesao'); ?></li>
			    <?php endwhile; ?>
			</ul>
		<?php endif; ?>
	</div>
</div>