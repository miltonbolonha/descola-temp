import React from 'react'
import { Link } from 'gatsby'

import Layout from '../layout'

const PostCard = ({
	postImage,
	linkUrl,
	title,
	excerpt,
	tags,
	readMoreText,
}) => {
	return (
		<div className="post-card">
			<Layout
				type="BLOCK_IMAGE"
				opt={{
					queryCard: postImage,
					hasLink: true,
					link: linkUrl,
					staticImage: true,
					publicImageUrl: postImage,
					alt: tags[0],
					placeholder: 'DOMINANT_COLOR',
				}}
			/>
			<div className="post-card-content">
				<h2>
					<Link to={linkUrl}>{title}</Link>
				</h2>
				<p>
					<Link to={linkUrl}>{excerpt}</Link>
				</p>
				<p>
					<Link to={linkUrl} className="card-posts-link">
						{readMoreText}
					</Link>
				</p>
			</div>
		</div>
	)
}
export default PostCard
