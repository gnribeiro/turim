<?php if(count($list)): ?>
	<?php foreach ($list as  $value): ?>
		<ul class="a-aside__list">
			<li><?php echo $value->post_title ?></li>

			<?php if(get_field("fax_contacts", $value->ID) ): ?>
				<li>Fax: <a href="tel:<?php echo get_field("fax_contacts", $value->ID) ?>" class="a-link-phone"><?php echo get_field("fax_contacts", $value->ID) ?></a></li>
			<?php endif ?>

			<?php if(get_field("telefone_contacts", $value->ID) ): ?>
				<li>Phone: <a href="tel:<?php echo get_field("telefone_contacts" , $value->ID) ?>" class="a-link-phone"><?php echo get_field("telefone_contacts" , $value->ID) ?></a></li>
			<?php endif ?>

			<?php if(get_field("email_contacts", $value->ID) ): ?>
				<li><a href="mailto:<?php echo get_field("email_contacts" , $value->ID) ?>" class="a-link-phone"><?php echo get_field("email_contacts" , $value->ID) ?></a></li>
			<?php endif ?>
		</ul>
	<?php endforeach; ?>
<?php endif; ?>