export const input = {
	text: '@_h4_ done',
	entities: {
		hashtags: [],
		symbols: [],
		user_mentions: [ {
			'screen_name': '_h4_',
			'name': 'Наполеон Бонапарт',
			'id': 15020265,
			'id_str': '15020265',
			'indices': [0, 5]
		}],
		urls: []
	}
}

export const output = '[@\\_h4\\_](https://twitter.com/_h4_ \"Наполеон Бонапарт\") done';
