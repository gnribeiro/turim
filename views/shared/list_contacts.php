<?php if(count($list)): ?>
	<?php foreach ($list as  $value): ?>
		<ul class="a-aside__list">
			<li><?php echo $value->post_title ?></li>

			<?php if(get_field("fax_contacts", $value->ID) ): ?>
				<li>Fax: <?php echo get_field("fax_contacts", $value->ID) ?></li>
			<?php endif ?>

			<?php if(get_field("telefone_contacts", $value->ID) ): ?>
				<li>Phone: <?php echo get_field("telefone_contacts" , $value->ID) ?></li>
			<?php endif ?>

			<?php if(get_field("email_contacts", $value->ID) ): ?>
				<li><?php echo get_field("email_contacts" , $value->ID) ?></li>
			<?php endif ?>
		</ul>
	<?php endforeach; ?>
<?php endif; ?>