import React, { useState } from 'react'
import Form from '../components/Form'
// import addToMailchimp from 'gatsby-plugin-mailchimp'
// import submitHandler from '../../PoupaLuz/containers/submit-handler'
import config from '../config/'

import slugify from '../../../tools/slugify'

export default function FormContainer({ opt }) {
	const [email, setEmail] = useState('')
	const [honey, setHoney] = useState('')
	// const [mcRes, setMcRes] = useState('')
	// console.log(mcRes)
	// const [msg, setMsg] = useState('')
	// const [success, setSuccess] = useState('')
	// const handleMcRes = (msgReceived, resReceived) => {
	// 	setMcRes(resReceived)
	// 	handleMsg(msgReceived, resReceived)
	// 	handleSuccess(resReceived)
	// }
	// const handleMsg = (msgNow, resReceived) => {
	// 	let msgNull = null
	// 	if (resReceived === 'error') {
	// 		msgNull = config.nope_msg
	// 	}
	// 	if (resReceived === 'success') {
	// 		msgNull = config.success_msg
	// 	}
	// 	setMsg(msgNull)
	// }
	// const handleSuccess = (successNow) => {
	// 	setSuccess(successNow)
	// }
	const handleEmailChange = (emailTyping) => {
		setEmail(emailTyping)
	}
	const handleHoneypotChange = (honeyTyping) => {
		console.log('honeypot')
		setHoney(honeyTyping)
	}
	const theFunction = (param) => {
		return (document.location =
			'https://descola.org/cursos?search=' + slugify(param))
	}
	const handleSubmit = async (e, email, honey) => {
		if (!e) {
			return null
		}
		// const configExample = {
		// 	ajax_url: 'http://localhost:3000/wp-admin/admin-ajax.php',
		// }
		// const dataExample = {
		// 	user: 'user',
		// 	pwd: 'pwd',
		// 	action: 'login_init',
		// }
		// easyAjax(configExample, dataExample, 'POST')
		e.preventDefault()
		honey || theFunction(email)
		// (await submitHandler(configExample, dataExample).then(
		// ({ msg, result }) => {
		// handleMcRes(msg, result)
		// return console.log('logo')
		// }
	}
	// const msgStyle =
	// 	success === 'success' ? config.success_class : config.nope_class

	return (
		<Form
			handleSubmit={handleSubmit}
			honeypotStateChanger={handleHoneypotChange}
			emailStateChanger={handleEmailChange}
			email={email}
			// msg={msg}
			// msgStyle={msgStyle}
			// success={success}
			honey={honey}
			bot_msg={config.bot_msg}
			form_class={config.form_class}
			size={config.size}
			// has_Link={nu_teias.link}
			// link_url={config.link_url}
			// link_text={config.link_text}
			email_placeholder={config.email_placeholder || opt.placeholder}
			noSPAM={config.noSPAM}
			warnME={config.warnME}
		/>
	)
}
