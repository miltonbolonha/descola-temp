import React, { useState } from 'react'

import { Link } from 'gatsby'
import Layout from '../layout'
import PostCard from './PostCard'

const PostsBlock = ({
	postList,
	currentPage,
	numPages,
	typeLoad,
	isFirst,
	prevPage,
	isLast,
	nextPage,
	readMoreText,
	pagination,
	postsPerPage,
}) => {
	const [currentFirstItem, setCurrentFirstItem] = useState(0)
	function handleCurrentFirstItem(current) {
		setCurrentFirstItem(current)
	}
	const handleBtnLoadMore = (e) => {
		e.preventDefault()
		handleCurrentFirstItem(currentFirstItem + postsPerPage)
	}
	// let currentPage = 1
	// const isFirst = currentPage === 1
	// const prevPage = currentPage - 1 === 1 ? (currentPage = 1) : currentPage - 1
	// const nextPage = currentPage + 1
	const numCollections = Math.ceil(postList.length / postsPerPage)
	const nextCollection = currentFirstItem + postsPerPage
	const isLastClick = nextCollection >= postList.length
	const initialLoad = typeLoad === 'push' ? 0 : currentFirstItem
	const posts = postList.slice(initialLoad, nextCollection)
	return (
		<div className="post-cards-wrapper">
			<Layout
				type="ROW"
				opt={{
					numColumns: 'auto-fit',
					classes: 'post-cards-row',
					widthColumns: 'minmax(290px, 1fr)',
				}}
			>
				{posts.map(
					(
						{
							node: {
								frontmatter: { title, tags, featuredImage },
								fields: { slug },
								excerpt,
							},
						},
						i
					) => {
						return (
							<PostCard
								postImage={featuredImage}
								linkUrl={slug}
								title={title}
								excerpt={excerpt}
								readMoreText={readMoreText}
								key={i}
								tags={tags}
							/>
						)
					}
				)}
			</Layout>
			<Layout
				type="ROW"
				opt={{ numRows: 1, isBoxed: true, classes: 'pagination' }}
			>
				{pagination.loadMoreBtn === true ? (
					<p className="btn-load-more">
						{isLastClick ? (
							' '
						) : (
							<button
								onClick={(e) => handleBtnLoadMore(e)}
								value={currentFirstItem}
							>
								{pagination.loadMore}
							</button>
						)}
					</p>
				) : (
					<>
						<p>
							{currentPage} de {numCollections}
						</p>
						{!isFirst && <Link to={prevPage}>← página anterior</Link>}
						{!isLast && <Link to={nextPage}>próxima página →</Link>}
					</>
				)}
			</Layout>
		</div>
	)
}

export default PostsBlock
