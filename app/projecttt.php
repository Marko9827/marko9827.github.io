<div id="modjal_for_projects">
    <div id="head_302">
        <p id="arrow_left"  onclick="alert('Test > Working!');" title="< Back"><i class="fas fa-arrow-left"></i></p>
        <p id="title">Portfolio > Projects</p>
    </div>
    <div id="main_302">
        <?php
        echo "Ova stranica je samo test!";
        ?>
    </div>
    <div id="footer_302">
    </div>
</div>
<style>
    #modjal_for_projects {
        position: fixed;
        left: 0px;
        width: 100%;
        top: 0px;
        height: 100%;
        background: white;
        z-index: 3444;
    }

    #modjal_for_projects #main_302 {
        color: var(--gold-color);
        text-align: center;
        margin-top: 30px;
        font-size: -webkit-xxx-large;
    }

    #modjal_for_projects #head_302 {
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, .2), 0 6px 70px 0 rgba(0, 0, 0, .1);

        height: 60px;
    }

    #modjal_for_projects #head_302 #arrow_left {
        color: var(--gold-color);
        font-size: 34px;
        padding-left: 20px;

    }


    #modjal_for_projects #head_302 #title {
        color: var(--gold-color);
        font-size: 23px;
        position: fixed;
        top: 9px;
        left: 64px;
    }

    #modjal_for_projects #head_302 #arrow_left .fa-arrow-left {
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, .2), 0 6px 70px 0 rgba(0, 0, 0, .1);
        padding: 4px;

        width: 35px;
        height: 35px;
        border-radius: 100px;
        transition: .1s;
    }

    #modjal_for_projects #head_302 #arrow_left .fa-arrow-left:hover {
        background: var(--gold-color);
        color: white;

    }
</style>