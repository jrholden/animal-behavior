<?php /* Template Name: H5p-listing */
get_header(); ?>
<?php
if ( \PressbooksBook\Helpers\is_book_public() ) :
	$data = \PressbooksBook\Helpers\get_h5p_activities();
	$activities = count( $data['activities'] );
	$filtered_by_id_exists = isset( $_GET['h5p_id'] ) && $activities === 1;
	$filtered_does_not_exist = isset( $_GET['h5p_id'] ) && $activities === 0;
	?>
	<div id="post-<?php the_ID(); ?>" <?php post_class( 'h5p-listing-page' ); ?>>
		<h1 class="page-title">
			<?php
			if ( $filtered_by_id_exists ) {
				echo $data['activities'][0]['title'];
			} elseif ( $filtered_does_not_exist ) {
				echo __( 'Invalid H5P activity', 'pressbooks-book' );
			} else {
				echo __( 'H5P activities list', 'pressbooks-book' );
			}
			?>
		</h1>
		<?php if ( ! isset( $_GET['h5p_id'] ) ) : ?>
			<p class="h5p-count">
				<?php echo __( 'This book includes ', 'pressbooks-book' ); ?>
				<strong><?php echo $data['total'] . ' '; ?></strong>
				<?php echo __( 'H5P activities. Only those which have been inserted into book content will be included if the book is cloned.', 'pressbooks-book' ); ?>
				<?php echo sprintf( '<button type="button" id="h5p-show-hide" class="btn btn-secondary btn-sm" show-all-text="%s" hide-all-text="%s" aria-label="%s"></button>', __( 'Expand all', 'pressbooks-book' ), __( 'Hide all', 'pressbooks-book' ), __( 'Expand all activities', 'pressbooks-book' ) ); ?>
			</p>
		<?php endif; ?>
		<?php if ( $filtered_does_not_exist ) : ?>
			<p class="h5p-count">
				<?php echo __( 'The requested H5P activity does not exist in this book.', 'pressbooks-book' ); ?>
			</p>
		<?php endif; ?>
		<table class="table table-borderless" id="h5p-listing-table">
			<thead>
			<tr>
				<th><?php echo __( 'ID', 'pressbooks-book' ); ?></th>
				<th><?php echo __( 'Title', 'pressbooks-book' ); ?></th>
				<th><?php echo __( 'Activity type', 'pressbooks-book' ); ?></th>
				<?php if ( ! $filtered_by_id_exists ) : ?>
					<th><?php echo __( 'Show/Hide', 'pressbooks-book' ); ?></th>
				<?php endif; ?>
			</tr>
			</thead>
			<tbody>
			<?php
			foreach ( $data['activities'] as $activity ) {
				$short_code = sprintf( '[h5p id="%s"]', $activity['ID'] );
				echo '<tr>';
				echo sprintf( '<td>%s</td>', $activity['ID'] );
				echo sprintf( '<td>%s</td>', $activity['title'] );
				echo sprintf( '<td>%s</td>', $activity['activity_type'] );
				if ( ! $filtered_by_id_exists ) {
					echo sprintf( '<td><button h5p-id="%s" type="button" show-activity-text="%s" hide-activity-text="%s" aria-label="%s" class="btn btn-secondary btn-sm h5p-row-item"></button></td>', $activity['ID'], __( 'Show activity', 'pressbooks-book' ), __( 'Hide activity', 'pressbooks-book' ), __( 'View h5p activity', 'pressbooks-book' ) );
				}
				echo '</tr>';
				echo $filtered_by_id_exists ?
					sprintf( '<tr><td colspan="4">%s</td></tr>', do_shortcode( $short_code ) ) :
					sprintf( '<tr class="h5p-activity-container"><td colspan="4">%s</td></tr>', do_shortcode( $short_code ) );
			}
			?>
			</tbody>
		</table>
		<div class="h5p-pagination">
			<?php echo $data['pagination']; ?>
		</div>

	</div>
<?php else : ?>
	<?php get_template_part( 'private' ); ?>
<?php endif; ?>
<?php get_footer(); ?>
