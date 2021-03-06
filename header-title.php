<?php
/*
 * The template for displaying a header title section
 */
	global $theme_option, $gdlr_post_option;
	$header_background = '';
?>

	<?php if( is_page() && (empty($gdlr_post_option['show-title']) || $gdlr_post_option['show-title'] != 'disable') ){ ?>
	<?php $page_background = ''; ?>
		<div class="gdlr-page-title-wrapper" <?php echo $header_background; ?> >
			<div class="gdlr-page-title-container container" >
				<h1 class="gdlr-page-title"><?php the_title(); ?></h1>
				<?php if( !empty($gdlr_post_option['page-caption']) ){ ?>
				<span class="gdlr-page-caption gdlr-title-font"><?php echo gdlr_text_filter($gdlr_post_option['page-caption']); ?></span>
				<?php } ?>
			</div>	
		</div>	
	<?php }else if( is_single() ){ // do nothing ?>
	<?php }else if( is_404() ){ ?>
		<div class="gdlr-page-title-wrapper" <?php echo $header_background; ?>  >
			<div class="gdlr-page-title-container container" >
				<h1 class="gdlr-page-title"><?php _e('404', 'gdlr_translate'); ?></h1>
				<span class="gdlr-page-caption gdlr-title-font"><?php _e('Page not found', 'gdlr_translate'); ?></span>
			</div>	
		</div>		
	<?php }else if( is_archive() || is_search() ){
		if( is_search() ){
			$title = __('Search Results', 'gdlr_translate');
			$caption = get_search_query();
		}else if( is_category() || is_tax('portfolio_category') || is_tax('product_cat') ){
			$title = __('Category','gdlr_translate');
			$caption = single_cat_title('', false);
		}else if( is_tag() || is_tax('portfolio_tag') || is_tax('product_tag') ){
			$title = __('Tag','gdlr_translate');
			$caption = single_cat_title('', false);
		}else if( is_day() ){
			$title = __('Day','gdlr_translate');
			$caption = get_the_date('F j, Y');
		}else if( is_month() ){
			$title = __('Month','gdlr_translate');
			$caption = get_the_date('F Y');
		}else if( is_year() ){
			$title = __('Year','gdlr_translate');
			$caption = get_the_date('Y');
		}else if( is_author() ){
			$title = __('By','gdlr_translate');
			
			$author_id = get_query_var('author');
			$author = get_user_by('id', $author_id);
			$caption = $author->display_name;					
		}else if( is_post_type_archive('product') ){
			$title = __('Shop', 'gdlr_translate');
			$caption = '';
		}else{
			$title = get_the_title();
			$caption = '';
		}
	?>
		<div class="gdlr-page-title-wrapper" <?php echo $header_background; ?> >
			<div class="gdlr-page-title-container container" >
				<span class="gdlr-page-title"><?php echo gdlr_text_filter($title); ?></span>
				<?php if( !empty($caption) ){ ?>
				<h1 class="gdlr-page-caption gdlr-title-font"><?php echo gdlr_text_filter($caption); ?></h1>
				<?php } ?>
			</div>	
		</div>		
	<?php } ?>
	<!-- is search -->