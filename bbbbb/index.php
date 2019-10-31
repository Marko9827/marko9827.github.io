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


    <input type="file" id="myid_upload_background_input" onClick="testClick();" />


    <input type="button" value="Take: <?php echo $get_post_id; ?>" onClick="takePicture('take Android! <?php echo time(); ?>')" />
    <?php // <a href="intent:#Intent;action=android.intent.action.SEND;type=text/plain;S.android.intent.extra.TEXT=https%3A%2F%2Fpaul.kinlan.me%2F;S.android.intent.extra.SUBJECT=Amazing;S.browser_fallback_url=https:%3A%2F%2Ftwitter.com%2Fintent%2Ftweet;end">r</a>
    ?><script type="text/javascript">
        function myid_templates_editor_open_file_dialog(elemId) {
            var elem = document.getElementById(elemId);
            if (elem && document.createEvent) {
                var evt = document.createEvent("MouseEvents");
                evt.initEvent("click", true, false);
                elem.dispatchEvent(evt);
            }
        }

        function testClick() {
         //   alert('Click event is invoked in an input file.');
        }

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


    <div id="app">
        <div v-if="!image">
            <h2>Select an image</h2>
            <input type="file" @change="onFileChange">
        </div>
        <div v-else>
            <img :src="image" />
            <button @click="removeImage">Remove image</button>
        </div>
    </div>

    <style>
        #app {
            text-align: center;
        }

        img {
            width: 30%;
            margin: auto;
            display: block;
            margin-bottom: 10px;
        }

        button {}
    </style>

    <script type="text/javascript">
        new Vue({
            el: '#app',
            data: {
                image: ''
            },

            methods: {
                onFileChange(e) {
                    var files = e.target.files || e.dataTransfer.files;
                    if (!files.length)
                        return;
                    this.createImage(files[0]);
                },
                createImage(file) {
                    var image = new Image();
                    var reader = new FileReader();
                    var vm = this;

                    reader.onload = e => {
                        vm.image = e.target.result;
                    };
                    reader.readAsDataURL(file);
                },
                removeImage: function(e) {
                    this.image = '';
                }
            }
        });
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