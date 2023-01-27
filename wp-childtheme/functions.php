<?php
// Do not allow directly accessing this file.
if ( ! defined('ABSPATH') ) exit;

/**
 * following theme features must be activated here
 *
 * @link https://developer.wordpress.org/reference/functions/add_theme_support/
 */
// Do not allow directly accessing this file.
if ( ! defined('ABSPATH') ) {
  exit;
}

if ( ! function_exists( 'dreipc_add_theme_supports' ) ) {
  function dreipc_add_theme_supports() {
		/**
		 * Add support for custom logo. Allow for setting
		 * logo for theme via WordPress customizer.
		 *
		 * @see https://developer.wordpress.org/reference/functions/add_theme_support/#custom-logo
		 */
		add_theme_support('custom-logo');

		/**
		 * Add support for head <title> tag. By adding `title-tag` support, we
		 * declare that this theme does not use a hard-coded <title> tag in
		 * the document head, and expect WordPress to provide it for us.
		 *
		 * @see https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
		 */
		add_theme_support( 'title-tag' );

		/**
		 * Enable support for Post Thumbnails on posts and pages. Note that you
		 * can optionally pass a second argument, $args, with an array of
		 * the Post Types for which you want to enable this feature.
		 *
		 * @see https://developer.wordpress.org/reference/functions/add_theme_support/#post-thumbnails
		 */
		add_theme_support('post-thumbnails');

    /**
		 * Switch default core markup for search forms, comment forms, comment
		 * lists, gallery, and captions to output valid HTML5 markup.
		 *
		 * @see https://developer.wordpress.org/reference/functions/add_theme_support/#html5
		 */
		add_theme_support(
			'html5', array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

    add_theme_support('automatic-feed-links'); // This feature adds RSS feed links to HTML <head>.
    add_theme_support('html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'style', 'script' ) ); // This feature allows the use of HTML5 markup for the search forms, comment forms, comment lists, gallery, and caption.
    add_post_type_support('page', 'excerpt'); // Let pages have an excerpt
    add_theme_support('wp-block-styles'); // Add Gutenberg Blog-Styles
    add_theme_support('responsive-embeds'); // Keep the aspect ratio when resizing content
    // add_theme_support('dark-editor-style');
    // add_theme_support('editor-styles');
  }
}
add_action('after_setup_theme', 'dreipc_add_theme_supports');

/**
 * ------------------------------------------------------------------------
 * Theme's Navigations
 * ------------------------------------------------------------------------
 * This file is for registering your theme's custom navigation areas
 * where various menus can be assigned by site administrators.
 */

if ( ! function_exists( 'dreipc_register_navigations' ) ) {
	/**
	 * Registers theme's navigation menus.
	 *
	 * @todo Change function prefix to your textdomain.
	 * @todo Update prefix in the hook function and if statement.
	 *
	 * @return void
	 */
	function dreipc_register_navigations() {
		register_nav_menus(
			array(
				'top'    => __('Top Navigation', '3pc'),
				'bottom' => __('Bottom Navigation', '3pc'),
			)
		);
	}
}
add_action('after_setup_theme', 'dreipc_register_navigations');
