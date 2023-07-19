<footer>
    <script type="text/javascript" src="./?mnps=portfolio-v3-old-s-s-script?<?php echo time(); ?>"></script>
    <script type="text/javascript" src="./?mnps=stylesheet-js-fai?<?php echo time(); ?>"></script>
    <script type="text/javascript" src="./?mnps=jquery-2.2.4?<?php echo time(); ?>"></script>
    <script id="rendered-js">
        $(function() {
            $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
            $(".accordion > .accordion-item").click(function() {
                $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
                $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
            });
        });
    </script>
</footer>