exports.handler = async function (event, context) {
	const feedJson = require('../../public/feed.json')
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: feedJson,
			context: context,
			event: event,
		}),
	}
}
