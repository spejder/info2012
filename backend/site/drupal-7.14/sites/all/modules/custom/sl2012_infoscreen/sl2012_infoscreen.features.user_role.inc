<?php
/**
 * @file
 * sl2012_infoscreen.features.user_role.inc
 */

/**
 * Implements hook_user_default_roles().
 */
function sl2012_infoscreen_user_default_roles() {
  $roles = array();

  // Exported role: contributor.
  $roles['contributor'] = array(
    'name' => 'contributor',
    'weight' => '4',
  );

  // Exported role: editor.
  $roles['editor'] = array(
    'name' => 'editor',
    'weight' => '3',
  );

  return $roles;
}
