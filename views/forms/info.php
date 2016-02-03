<?php global $site ?>
<div class="a-aside">
	<div class="a-aside__header">
	    <h5>PEDIR <br/> INFORMAÇÕES</h5>
	    <a class="a-btn a-btn--light m-t-10" data-a-widget="Amodal" data-a-widget-options="<?php echo $modal ?>"><?php _e('Fale connosco' , 'turim') ?><i class="fa fa-chevron-right"></i></a>
	</div>
</div>
<?php echo $site->get_partial('modals/info' , array('ajax'=>$ajax)) ?>