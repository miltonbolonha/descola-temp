import React from 'react'
// import slugify from '@tools/slugify'
import MainWrapper from './MainWrapper'

import FacebookIcon from '../../../static/images/face-icon.svg'
import TwitterIcon from '../../../static/images/twitter-icon.svg'
import WhatsIcon from '../../../static/images/whats-icon.svg'
import ShareIcon from '../../../static/images/share-icon.svg'
import {
	FacebookShareButton,
	TelegramShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from 'react-share'

const ShareButtons = ({ title, siteUrl }) => {
	if (!title) {
		return null
	}
	// const titleSlug = slugify(title)
	// const { url, title } = opt

	return (
		<MainWrapper title={'index-link-wrapper'}>
			<div className="wrapper-buttons">
				<span>Compartilhe
				<div className="modal-share-button">
					<FacebookShareButton quote={title} url={siteUrl} title={title}>
						<FacebookIcon />
					</FacebookShareButton>
					<TwitterShareButton url={siteUrl} title={title}>
						<TwitterIcon />
					</TwitterShareButton>
					<WhatsappShareButton url={siteUrl} title={title}>
						<WhatsIcon />
					</WhatsappShareButton>
					<TelegramShareButton url={siteUrl} title={title}>
						<ShareIcon />
					</TelegramShareButton>
				</div>
			</div>
		</MainWrapper>
	)
}
export default ShareButtons
