<div class="a-aside">
	<div class="a-aside__header">
	    <h5>Adesão</h5>
	    TURIM HOTÉIS  •  FICHA DE INSCRIÇÃO
	    <a class="a-btn a-btn--light m-t-15">Adesão <i class="fa fa-chevron-right" data-a-widget="Amodal" data-a-widget-options="<?php echo $modal ?>"></i></a>
	</div>
	<div class="a-aside__content">
		<?php if(have_rows('vantagens_adesao')): ?>
			<ul class="a-aside__list">
				<li class="m-b-25">Vantagens</li>
				<?php while( have_rows('vantagens_adesao') ): the_row(); ?>
					<li> <?php the_sub_field('vantagem_adesao'); ?></li>
			    <?php endwhile; ?>
			</ul>
		<?php endif; ?>
	</div>
</div>
<?php echo $site->get_partial('modals/adesao' , array('ajax'=>$ajax)) ?>