<?php
// Exit if the file is accessed directly over web
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/***
 * List Photos attched to an activity
 *
 * Media List attached to an activity
 *
 */


$mppq = new MPP_Cached_Media_Query( array( 'in' => mpp_activity_get_displayable_media_ids( $activity_id ) ) );

if ( $mppq->have_media() ) : ?>

<script>
    

$("#slider ul li:empty").remove();

</script>


	<style>
    
#slider {
  position: relative;
  overflow: hidden;
   height:200px;

}
#slider ul a img{
    height:200px;
}
#slider ul a {  
    height: 200px;
    
}
#slider ul {
  position: relative;
  margin: 0;
  padding: 0;
  height: 200px;
  list-style: none;
}

#slider ul li {
  position: relative;
  display: block;
  float: left;
  margin: 0;
  padding: 0;
  width: 500px; 
  height: 300px;
  background: black;
  text-align: center;
  line-height: 200px;
}

a.control_prev, a.control_next {
  position: absolute;
  top: 40%;
  z-index: 999;
  display: block;
  padding: 4% 3%;
  width: auto;
  height: auto;
  background: #2a2a2a;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  opacity: 0.8;
  cursor: pointer;
}

a.control_prev:hover, a.control_next:hover {
  opacity: 1;
  -webkit-transition: all 0.2s ease;
}

a.control_prev {
  border-radius: 0 2px 2px 0;
}

a.control_next {
  right: 0;
  border-radius: 2px 0 0 2px;
}

.slider_option {
  position: relative;
  margin: 10px auto;
  width: 160px;
  font-size: 18px;
}

    </style>

  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>

<script>

   
jQuery(document).ready(function ($) {
/*
  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  }); */
  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
              $("ul li:empty").remove();
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
            
              $("ul li:empty").remove();
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
        $("ul li:empty").remove();
    });

    $('a.control_next').click(function () {
        moveRight();
        $("ul li:empty").remove();
    });

});    


$("ul li:empty").remove();




</script>





	<div id="slider" class="mpp-container mpp-activity-container mpp-media-list mpp-activity-media-list mpp-activity-photo-list mpp-media-list-view-grid mpp-photo-view-grid mpp-activity-photo-view-grid">
      <a style="cursor:pointer;"  class="control_next">></a>
  <a  style="cursor:pointer;"  class="control_prev"><</a>
  
 <ul><?php while ( $mppq->have_media() ) : $mppq->the_media(); ?><li class="li_itemf" style="background:<?php mpp_media_src( 'thumbnail' ); ?>;"><a href="<?php mpp_media_permalink(); ?>" data-mpp-activity-id="<?php echo $activity_id; ?>" data-mpp-media-id="<?php mpp_media_id(); ?>" class="mpp-media mpp-activity-media mpp-activity-media-photo"><img src="<?php mpp_media_src( 'thumbnail' ); ?>" class='mpp-attached-media-item' title="<?php echo esc_attr( mpp_get_media_title() ); ?>"/></a><li>
		<?php endwhile; ?></ul>
	
	</div><!-- end of .mpp-activity-media-list -->
<?php endif; ?>
<?php mpp_reset_media_data(); ?>
