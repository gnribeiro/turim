<div class="a-tabs" data-a-widget="Tabs" data-a-widget-options="<?php echo $tabs_json ?>">
    <nav class="a-tabs__links">
        <?php $i=0 ; foreach($tabs as $key => $value): $i++; ?>
            <a href="#" data-tab="<?php echo $key ?>" class="a-tabs__link <?php if($i===1) echo 'a-tabs__link--selected' ?>"><?php echo $value['name'] ?></a>
        <?php endforeach; ?>
    </nav>

    <div class="a-tabs__container">
        <?php $i=0 ; foreach($tabs as $key => $value): $i++; ?>
            <div class="a-tabs__content <?php if($i===1) echo 'a-tabs__content--selected' ?> " >
                <?php echo $value['view'] ?>
            </div>
       <?php endforeach; ?>
     </div>
</div>