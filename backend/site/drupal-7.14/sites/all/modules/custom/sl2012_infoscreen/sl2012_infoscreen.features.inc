<?php
/**
 * @file
 * sl2012_infoscreen.features.inc
 */

/**
 * Implements hook_fe_nodequeue_export_fields().
 */
function sl2012_infoscreen_fe_nodequeue_export_fields() {
  $nodequeues = array();

  // Exported nodequeues: slideshow
  $nodequeues['slideshow'] = array(
    'qid' => '2',
    'name' => 'slideshow',
    'title' => 'Slideshow',
    'subqueue_title' => '',
    'size' => '0',
    'link' => '',
    'link_remove' => '',
    'owner' => 'nodequeue',
    'show_in_ui' => '1',
    'show_in_tab' => '1',
    'show_in_links' => '0',
    'reference' => '0',
    'reverse' => '0',
    'i18n' => '0',
    'subqueues' => '1',
    'types' => array(
      0 => 'album',
    ),
    'roles' => array(),
    'count' => 0,
  );

  // Exported nodequeues: tickets
  $nodequeues['tickets'] = array(
    'qid' => '1',
    'name' => 'tickets',
    'title' => 'Tickets',
    'subqueue_title' => '',
    'size' => '0',
    'link' => '',
    'link_remove' => '',
    'owner' => 'nodequeue',
    'show_in_ui' => '1',
    'show_in_tab' => '1',
    'show_in_links' => '0',
    'reference' => '0',
    'reverse' => '0',
    'i18n' => '0',
    'subqueues' => '1',
    'types' => array(
      0 => 'ticket',
    ),
    'roles' => array(),
    'count' => 0,
  );

  return $nodequeues;
}

/**
 * Implements hook_image_default_styles().
 */
function sl2012_infoscreen_image_default_styles() {
  $styles = array();

  // Exported image style: 1080p.
  $styles['1080p'] = array(
    'name' => '1080p',
    'effects' => array(
      2 => array(
        'label' => 'Scale',
        'help' => 'Scaling will maintain the aspect-ratio of the original image. If only a single dimension is specified, the other dimension will be calculated.',
        'effect callback' => 'image_scale_effect',
        'dimensions callback' => 'image_scale_dimensions',
        'form callback' => 'image_scale_form',
        'summary theme' => 'image_scale_summary',
        'module' => 'image',
        'name' => 'image_scale',
        'data' => array(
          'width' => '1200',
          'height' => '800',
          'upscale' => 0,
        ),
        'weight' => '-10',
      ),
      3 => array(
        'label' => 'Define canvas',
        'help' => 'Define the size of the working canvas and background color, this controls the dimensions of the output image.',
        'effect callback' => 'canvasactions_definecanvas_effect',
        'dimensions callback' => 'canvasactions_definecanvas_dimensions',
        'form callback' => 'canvasactions_definecanvas_form',
        'summary theme' => 'canvasactions_definecanvas_summary',
        'module' => 'imagecache_canvasactions',
        'name' => 'canvasactions_definecanvas',
        'data' => array(
          'RGB' => array(
            'HEX' => 'ffffff',
          ),
          'under' => 1,
          'exact' => array(
            'width' => '1200',
            'height' => '800',
            'xpos' => 'center',
            'ypos' => 'center',
          ),
          'relative' => array(
            'leftdiff' => '',
            'rightdiff' => '',
            'topdiff' => '',
            'bottomdiff' => '',
          ),
        ),
        'weight' => '-9',
      ),
    ),
  );

  return $styles;
}

/**
 * Implements hook_node_info().
 */
function sl2012_infoscreen_node_info() {
  $items = array(
    'album' => array(
      'name' => t('Album'),
      'base' => 'node_content',
      'description' => t('Photo album'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
    'ticket' => array(
      'name' => t('Ticket'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
