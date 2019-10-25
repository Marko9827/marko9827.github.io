<?php 

$get_post_id = rand(0, 9999999) + time();

?>

<html>

<head>
    <title>Android webview example by Rapid Programmer</title>
</head>

<body>
    <input type="button" value="Share : <?php echo $get_post_id; ?>" onClick="share('share Android! <?php echo time(); ?>')" />
    <input type="button" value="Toast : <?php echo $get_post_id; ?>" onClick="toast('http://portfolio.eronelit.com/bbbbb/fff.png')" />
    
    <input type="button" value="Viber : <?php echo $get_post_id; ?>" onClick="all_share_click__ff_viber_<?php echo $get_post_id; ?>()" />
    <input type="button" value="Whatch app : <?php echo $get_post_id; ?>" onClick="all_share_click__ff_whatchapp_<?php echo $get_post_id; ?>()" />


    <input type="button" value="Take: <?php echo $get_post_id; ?>" onClick="takePicture('take Android! <?php echo time(); ?>')" />
    <?php // <a href="intent:#Intent;action=android.intent.action.SEND;type=text/plain;S.android.intent.extra.TEXT=https%3A%2F%2Fpaul.kinlan.me%2F;S.android.intent.extra.SUBJECT=Amazing;S.browser_fallback_url=https:%3A%2F%2Ftwitter.com%2Fintent%2Ftweet;end">r</a>
    ?><script type="text/javascript">
        function share(toast) {
            if (typeof Android !== "undefined" && Android !== null) {
                Android.openSharing(toast);
            } else {

            }
        }

        function toast(toast) {
            if (typeof Android !== "undefined" && Android !== null) {
                Android.showToast(toast);
            } else {

            }
        }


        function all_share_click__ff_whatchapp_<?php echo $get_post_id; ?>() {
        var url_toast = "https://interaktivmarket.com/posts/post?pid=<?php echo $get_post_id; ?>";            
        
        if (typeof Android !== "undefined" && Android !== null) {
                Android.showToast_whatchapp(url_toast);
            } else {
            /*    if ($('#mjodal_<?php echo $get_post_id; ?>').attr('style') === 'display:none') {

                    $('#mjodal_<?php echo $get_post_id; ?>').attr('style', 'display:block');
                     } else {
                    $('#mjodal_<?php echo $get_post_id; ?>').attr('style', 'display:none');
                     } 
                     */
                    console.log("y-");
                    console.log(url_toast)
            }
        }

  function all_share_click__ff_viber_<?php echo $get_post_id; ?>() {
        var url_toast = "https://interaktivmarket.com/posts/post?pid=<?php echo $get_post_id; ?>";            
        
        if (typeof Android !== "undefined" && Android !== null) {
                Android.showToast_viber(url_toast);
            } else {
            /*    if ($('#mjodal_<?php echo $get_post_id; ?>').attr('style') === 'display:none') {

                    $('#mjodal_<?php echo $get_post_id; ?>').attr('style', 'display:block');
                     } else {
                    $('#mjodal_<?php echo $get_post_id; ?>').attr('style', 'display:none');
                     } 
                     */
                    console.log("y-");
                    console.log(url_toast)
            }
        }
    </script>

</body>

</html>


<?php /*
💙💙💙💙💙💙💙💙💙
💙💙💛💙💙💙💛💙💙
💙💛💛💛💙💛💛💛💙
💙💛💛💛💛💛💛💛💙
💙💙💛💛💛💛💛💙💙
💙💙💙💛💛💛💙💙💙
💙💙💙💙💛💙💙💙💙
💙💙💙💙💙💙💙💙💙*/
 ?>