import React from 'react'

const SocialInfos = ({
	facebook,
	instagram,
	youtube,
	iconFace,
	iconTwitter,
	iconInsta,
	iconUTube,
}) => (
	<ul className="social-links social-links__dark">
		<li>
			<a href={facebook} target="_blank" rel="noreferrer">
				{iconFace}
			</a>
		</li>
		<li>
			<a href={instagram} target="_blank" rel="noreferrer">
				{iconInsta}
			</a>
		</li>
		<li>
			<a href={youtube} target="_blank" rel="noreferrer">
				{iconUTube}
			</a>
		</li>
	</ul>
)
export default SocialInfos
