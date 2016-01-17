<section class="a-intro" <?php echo $style ?>>
    <div class="a-container">
        <?php if(isset($intro_resume)): ?>
            <h2 class="a-intro__resume"><?php echo $intro_resume ?></h2>
        <?php endif ?>

        <?php if(isset($intro_title)): ?>
            <h1 class="a-intro__title"><?php echo $intro_title ?></h1>
        <?php endif ?>

        <?php if(isset($intro_content)): ?>
            <div class="a-intro__content"><?php echo $intro_content ?></div>
        <?php endif ?>

        <?php if(isset($intro_link) && !filter_var($intro_link, FILTER_VALIDATE_URL) === false): ?>
            <div class="a-intro__link">
                <a href="<?php echo $intro_link?>" <?php echo $class ?>><?php echo $intro_link_text ?> <i class="fa fa-chevron-right"></i></a>
            </div>
        <?php endif ?>
    </div>
</section>