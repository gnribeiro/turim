<?php global $site ?>
<div class="a-aside">
	<div class="a-aside__header">
	    <h5>RECRUTAMENTO</h5>
	    TURIM HOTÉIS  •  FICHA DE INSCRIÇÃO
	    <a class="a-btn a-btn--light a-btn--round m-t-15" data-a-widget="Amodal" data-a-widget-options="<?php echo $modal ?>">Recrutamento <i class="fa fa-chevron-right"></i></a>
	</div>
	<div class="a-aside__content">
		<?php if(isset($content)): ?>
			<?php echo $content ?>
		<?php endif ?>
	</div>
</div>

<?php echo $site->get_partial('modals/recrutamento' , $ajax) ?>