<?php global $site ?>
<div class="a-aside">
	<div class="a-aside__header">
	    <h5><?php _e('Adesão' , 'turim')?></h5>
	    <?php _e('TURIM HOTÉIS  •  FICHA DE INSCRIÇÃO' , 'turim')?>
	    <a class="a-btn a-btn--light m-t-15" data-a-widget="Amodal" data-a-widget-options="<?php echo $modal ?>"><?php _e('Adesão' , 'turim')?> <i class="fa fa-chevron-right" ></i></a>
	</div>
	<div class="a-aside__content">
		<?php if(have_rows('vantagens_adesao')): ?>
			<ul class="a-aside__list">
				<li class="m-b-25"><?php _e('Vantagens' , 'turim')?></li>
				<?php while( have_rows('vantagens_adesao') ): the_row(); ?>
					<li> <?php the_sub_field('vantagem_adesao'); ?></li>
			    <?php endwhile; ?>
			</ul>
		<?php endif; ?>
	</div>
</div>
<?php echo $site->get_partial('modals/adesao' , array('ajax'=>$ajax)) ?>