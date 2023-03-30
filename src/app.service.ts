import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Client } from '@line/bot-sdk';
@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly httpService: HttpService) {}
  getHello() {
    return { text: 'Hello jenkins.. updated' };
  }

  async handleWebHook(data: any) {
    this.logger.debug(`handleWebHook >> ${JSON.stringify(data)}`);
    const channelAccesToken = ``;
    const channelSecret = ``;

    const event = data['events'][0];
    const eventType = event['type'];
    if (eventType === 'message') {
      try {
        const client = new Client({
          channelAccessToken: channelAccesToken,
          channelSecret: channelSecret,
        });

        const replyToken = event['replyToken'];
        client.replyMessage(replyToken, { type: 'text', text: 'hello, world' });
      } catch (error) {
        this.logger.debug(error);
      }
    }
  }
}
