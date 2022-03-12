import React from 'react'
import { RiSearchLine } from 'react-icons/ri'
export default function Form({
	// msg,
	// success,
	handleSubmit,
	honeypotStateChanger,
	searchStateChanger,
	search,
	honey,
	bot_msg,
	form_class,
	// msgStyle,
	// link_url,
	// link_text,
	// has_Link,
	search_placeholder,
	noSPAM,
	warnME,
	placeholder,
	size,
}) {
	return (
		<>
			<div className={form_class}>
				<form
					className="main-menu-form validate"
					method="post"
					id="mc-embedded-subscribe-form"
					name="mc-embedded-subscribe-form"
					target="_blank"
					onSubmit={(e) => handleSubmit(e, search, honey)}
					noValidate
				>
					<p className="hidden">
						<label>
							{bot_msg}
							<input
								name="bot-field"
								onChange={(e) => honeypotStateChanger(e.target.value)}
								value={honey}
							/>
						</label>
					</p>
					<input
						type="search"
						name="SEARCH"
						id="mce-SEARCH"
						placeholder={search_placeholder}
						required
						className="inputzim"
						size={size}
						onChange={(e) => searchStateChanger(e.target.value)}
						value={search}
						aria-label="Search"
					/>

					{honey !== '' ? null : (
						<>
							<button
								type="submit"
								className="main-menu-search-input"
								name="subscribe"
								id="mc-embedded-subscribe"
								disabled={search ? false : true}
							>
								{warnME || <RiSearchLine />}
							</button>
						</>
					)}
				</form>
			</div>
		</>
	)
}
