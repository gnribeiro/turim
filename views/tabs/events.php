<div class="a-clearfix">
    <div class="a-col-8">
        <?php if( get_field('title_tab_events_hotel') ): ?>
            <h2>
                <?php echo  get_field('title_tab_events_hotel') ?>
            </h2>
        <?php endif ?>
         <?php if( get_field('content_tab_events_hotel') ): ?>
            <div>
                <?php echo  get_field('content_tab_events_hotel') ?>
            </div>
        <?php endif ?>
        </div>
    </div>
</div>