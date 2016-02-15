<?php
if($_POST && isset($_POST['delete_instagram_cache']) ) {
  delete_transient('instagram_homepage');
}
?>


<div class="wrap">
    <h2>Delete Instagram Cache </h2>
     <p>
  <?php if ($_POST && isset($_POST['delete_instagram_cache'])): ?>
     <?php echo "Cache delete com sucesso"?>
  <?php endif ?>
  </p>
    <form action="" method="POST">
        <input type="hidden" name="delete_instagram_cache" value="true" />
        <input type="submit" class="button button-primary button-large" value="DELETE CACHE">
    </form>
</div>