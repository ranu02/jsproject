<nav class="large-1 medium-1 columns" id="actions-sidebar">
    <ul class="side-nav">
        <li class="heading"><?= __('Actions') ?></li>
        <li><?= $this->Html->link(__('List Tags'), ['action' => 'index']) ?></li>
        <li><?= $this->Html->link(__('List Bookmarks'), ['controller' => 'Bookmarks', 'action' => 'index']) ?></li>
        <li><?= $this->Html->link(__('New Bookmark'), ['controller' => 'Bookmarks', 'action' => 'add']) ?></li>

    </ul>
</nav>
<div class="tags form large-9 medium-8 columns content">
    <?= $this->Form->create('User') ?>
    <fieldset>
        <legend><?= __('Add Tag') ?></legend>
        <?php
            echo $this->Form->input('fname',array('label'=>'First Name'));
        ?>

       <?php
            echo $this->Form->input('lname',array('label'=>'Last Name'));
        ?>

    <?php
            echo $this->Form->input('email',array('label'=>'Email'));
        ?>

<?php
            echo $this->Form->input('addr',array('label'=>'Address'));
        ?>
<?php
            echo $this->Form->input('pwd',array('label'=>'Password'));
        ?>

<?php
            echo $this->Form->input('rpwd',array('label'=>'Re Password'));
        ?>

<?php
            echo $this->Form->input('phone',array('label'=>'Phone'));
        ?>


    </fieldset>
    <?= $this->Form->button(__('Submit')) ?>
    <?= $this->Form->end() ?>

</div>
