<?php
	global $post;
	$classes = (isset($form)) ? "a-col-9 a-sm-col-8" : "a-col-12";
?>

<section class="a-light p-t-70 p-b-75">
	<article class="a-container">
	    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
	    	<div class="<?php echo $classes ?>">
	        	<h1><?php the_title() ?></h1>
	        	<div class="a-bo"><?php the_content() ?></div>

		        <?php if(has_post_thumbnail(get_the_ID())): ?>
			        <div class="m-t-20">
			        	<img src="<?php echo wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()) );
		 ?>" alt="" class="a-img-responsive"/>
			        </div>
		    	<?php endif ?>
	    	</div>


			<?php if(isset($form)): ?>
	       		<aside class="a-col-3 a-sm-col-4">
	       		<?php echo $form ?>
	       		</aside>
	       <?php endif ?>
	    <?php endwhile; endif ?>
	</article>
</section>

