export interface IAuthor {
	id: number;
	name: string;
	image: string;
	bio: string;
	postCount: number;
}


export const generateJSONLD = (author: IAuthor) => {
	const homeUrl = `#`;
	const authorUrl = `${homeUrl}/author/${author.id}/`;

	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'ProfilePage',
				'@id': authorUrl,
				url: authorUrl,
				name: `${author.name}, Author at SiteName`,
				isPartOf: {
					'@id': `${homeUrl}#website`,
				},
				breadcrumb: {
					'@id': `${authorUrl}#breadcrumb`,
				},
				inLanguage: 'en-US',
				potentialAction: [
					{
						'@type': 'ReadAction',
						target: [authorUrl],
					},
				],
			},
			{
				'@type': 'BreadcrumbList',
				'@id': `${authorUrl}#breadcrumb`,
				itemListElement: [
					{
						'@type': 'ListItem',
						position: 1,
						name: 'Home',
						item: homeUrl,
					},
					{
						'@type': 'ListItem',
						position: 2,
						name: `Archives for ${author.name}`,
					},
				],
			},
			{
				'@type': 'WebSite',
				'@id': `${homeUrl}#website`,
				url: homeUrl,
				name: 'SiteName',
				description: '',
				publisher: {
					'@id': `${homeUrl}#organization`,
				},
				potentialAction: [
					{
						'@type': 'SearchAction',
						target: {
							'@type': 'EntryPoint',
							urlTemplate: `${homeUrl}?s={search_term_string}`,
						},
						'query-input': 'required name=search_term_string',
					},
				],
				inLanguage: 'en-US',
			},
			{
				'@type': 'Organization',
				'@id': `${homeUrl}#organization`,
				name: 'SiteName',
				url: homeUrl,
				logo: {
					'@type': 'ImageObject',
					inLanguage: 'en-US',
					'@id': 'logo url here',
					url: `${homeUrl}assets/ou-logo.png`,
					contentUrl:
						'logo url here',
					width: 150,
					height: 50,
					caption: 'camption here',
				},
				image: {
					'@id': `${homeUrl}#/schema/logo/image/`,
				},
				sameAs: [
					'https://www.facebook.com/',
					'https://twitter.com/',
					'https://www.instagram.com/',
					'https://www.linkedin.com/company/',
					'https://www.youtube.com/user/',
					'https://en.wikipedia.org/wiki/',
				],
			},
			{
				'@type': 'Person',
				'@id': `${homeUrl}#/schema/person/${author.id}`,
				name: author.name,
				image: {
					'@type': 'ImageObject',
					inLanguage: 'en-US',
					'@id': `${homeUrl}#/schema/person/image/`,
					url: author.image,
					contentUrl: author.image,
					caption: author.name,
				},
				mainEntityOfPage: {
					'@id': authorUrl,
				},
			},
		],
	};
};
