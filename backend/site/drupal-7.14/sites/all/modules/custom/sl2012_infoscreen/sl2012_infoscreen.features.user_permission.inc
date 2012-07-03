<?php
/**
 * @file
 * sl2012_infoscreen.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function sl2012_infoscreen_user_default_permissions() {
  $permissions = array();

  // Exported permission: access content overview.
  $permissions['access content overview'] = array(
    'name' => 'access content overview',
    'roles' => array(
      0 => 'administrator',
      1 => 'contributor',
      2 => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: access overlay.
  $permissions['access overlay'] = array(
    'name' => 'access overlay',
    'roles' => array(
      0 => 'administrator',
      1 => 'contributor',
      2 => 'editor',
    ),
    'module' => 'overlay',
  );

  // Exported permission: access toolbar.
  $permissions['access toolbar'] = array(
    'name' => 'access toolbar',
    'roles' => array(
      0 => 'administrator',
      1 => 'contributor',
      2 => 'editor',
    ),
    'module' => 'toolbar',
  );

  // Exported permission: administer nodequeue.
  $permissions['administer nodequeue'] = array(
    'name' => 'administer nodequeue',
    'roles' => array(
      0 => 'administrator',
    ),
    'module' => 'nodequeue',
  );

  // Exported permission: allow plupload.
  $permissions['allow plupload'] = array(
    'name' => 'allow plupload',
    'roles' => array(
      0 => 'administrator',
      1 => 'contributor',
      2 => 'editor',
    ),
    'module' => 'plup',
  );

  // Exported permission: create album content.
  $permissions['create album content'] = array(
    'name' => 'create album content',
    'roles' => array(
      0 => 'contributor',
      1 => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: create ticket content.
  $permissions['create ticket content'] = array(
    'name' => 'create ticket content',
    'roles' => array(
      0 => 'contributor',
      1 => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: create video content.
  $permissions['create video content'] = array(
    'name' => 'create video content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: delete any album content.
  $permissions['delete any album content'] = array(
    'name' => 'delete any album content',
    'roles' => array(
      0 => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: delete any ticket content.
  $permissions['delete any ticket content'] = array(
    'name' => 'delete any ticket content',
    'roles' => array(
      0 => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: delete any video content.
  $permissions['delete any video content'] = array(
    'name' => 'delete any video content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: delete own album content.
  $permissions['delete own album content'] = array(
    'name' => 'delete own album content',
    'roles' => array(
      0 => 'contributor',
      1 => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: delete own ticket content.
  $permissions['delete own ticket content'] = array(
    'name' => 'delete own ticket content',
    'roles' => array(
      0 => 'contributor',
      1 => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: delete own video content.
  $permissions['delete own video content'] = array(
    'name' => 'delete own video content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: delete revisions.
  $permissions['delete revisions'] = array(
    'name' => 'delete revisions',
    'roles' => array(
      0 => 'administrator',
      1 => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: edit any album content.
  $permissions['edit any album content'] = array(
    'name' => 'edit any album content',
    'roles' => array(
      0 => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: edit any ticket content.
  $permissions['edit any ticket content'] = array(
    'name' => 'edit any ticket content',
    'roles' => array(
      0 => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: edit any video content.
  $permissions['edit any video content'] = array(
    'name' => 'edit any video content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: edit media.
  $permissions['edit media'] = array(
    'name' => 'edit media',
    'roles' => array(
      0 => 'administrator',
      1 => 'contributor',
      2 => 'editor',
    ),
    'module' => 'media',
  );

  // Exported permission: edit own album content.
  $permissions['edit own album content'] = array(
    'name' => 'edit own album content',
    'roles' => array(
      0 => 'contributor',
      1 => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: edit own ticket content.
  $permissions['edit own ticket content'] = array(
    'name' => 'edit own ticket content',
    'roles' => array(
      0 => 'contributor',
      1 => 'editor',
    ),
    'module' => 'node',
  );

  // Exported permission: edit own video content.
  $permissions['edit own video content'] = array(
    'name' => 'edit own video content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: manipulate all queues.
  $permissions['manipulate all queues'] = array(
    'name' => 'manipulate all queues',
    'roles' => array(
      0 => 'administrator',
      1 => 'editor',
    ),
    'module' => 'nodequeue',
  );

  // Exported permission: manipulate queues.
  $permissions['manipulate queues'] = array(
    'name' => 'manipulate queues',
    'roles' => array(
      0 => 'administrator',
      1 => 'editor',
    ),
    'module' => 'nodequeue',
  );

  return $permissions;
}
