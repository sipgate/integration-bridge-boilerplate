import {
	Adapter,
	Config,
	Contact,
	PhoneNumberLabel,
	start,
} from '@sipgate/integration-bridge';
import { config } from 'dotenv';
import { Request } from 'express';

config();

class MyAdapter implements Adapter {
	/**
	 * TODO: Fetch contacts from the contacts provider using config.apiKey and config.apiUrl or throw on error
	 */
	/* eslint-disable @typescript-eslint/no-unused-vars */
	public async getContacts(config: Config): Promise<Contact[]> {
		const contact: Contact = {
			id: '7f23375d-35e2-4034-889a-2bdc9cba9633',
			name: null,
			firstName: 'Max',
			lastName: 'Mustermann',
			email: 'mustermann@example.com',
			organization: 'MyCompany GmbH',
			contactUrl:
				'https://www.example.com/contact/7f23375d-35e2-4034-889a-2bdc9cba9633',
			avatarUrl:
				'https://www.example.com/contact/7f23375d-35e2-4034-889a-2bdc9cba9633/avatar.png',
			phoneNumbers: [
				{
					label: PhoneNumberLabel.MOBILE,
					phoneNumber: '+4915799912345',
				},
			],
		};

		const contacts: Contact[] = await Promise.resolve([contact]);

		return contacts;
	}

	/**
	 * TODO: Fetch paginated contacts from the contacts provider using config.apiKey and config.apiUrl or throw on error
	 */
	/* eslint-disable @typescript-eslint/no-unused-vars */
	public async *streamContacts(config: Config): AsyncGenerator<Contact[]> {
		const contact: Contact = {
			id: '7f23375d-35e2-4034-889a-2bdc9cba9633',
			name: null,
			firstName: 'Max',
			lastName: 'Mustermann',
			email: 'mustermann@example.com',
			organization: 'MyCompany GmbH',
			contactUrl:
				'https://www.example.com/contact/7f23375d-35e2-4034-889a-2bdc9cba9633',
			avatarUrl:
				'https://www.example.com/contact/7f23375d-35e2-4034-889a-2bdc9cba9633/avatar.png',
			phoneNumbers: [
				{
					label: PhoneNumberLabel.MOBILE,
					phoneNumber: '+4915799912345',
				},
			],
		};

		const contacts: Contact[] = await Promise.resolve([contact]);

		let i = 0;
		while (i < 3) {
			yield contacts;
			i += 1;
		}
	}

	/**
	 * REQUIRED FOR OAUTH2 FLOW
	 * Return the redirect URL for the given contacts provider.
	 * Users will be redirected here to authorize the integration.
	 */
	public async getOAuth2RedirectUrl(): Promise<string> {
		const redirectUrl = await Promise.resolve(
			'https://crm.example.com/oauth2/authorize'
		);
		return redirectUrl;
	}

	/**
	 * REQUIRED FOR OAUTH2 FLOW
	 * Users will be redirected here after authorizing the integration.
	 *
	 * TODO: Extract the 'code' from request, fetch an access token
	 * and return it as 'apiKey'
	 */
	/* eslint-disable @typescript-eslint/no-unused-vars */
	public async handleOAuth2Callback(
		req: Request
	): Promise<{ apiKey: string; apiUrl: string }> {
		// EXAMPLE:
		// const { code } = req.query;
		// const query = queryString.stringify({ code });
		// const response = await request(`https://crm.example.com/oauth2/token?${query}`)
		// return {
		// 	apiKey: response.accessToken,
		// 	apiUrl: response.instanceUrl
		// };

		return Promise.resolve({
			apiKey: 'a1b2c3',
			apiUrl: 'https://eu5.crm.example.com/api',
		});
	}
}

start(new MyAdapter());
