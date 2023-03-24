import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { Client } from '@line/bot-sdk';
@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly httpService: HttpService) {}
  getHello() {
    return { text: 'Hello World!' };
  }

  async handleWebHook(data: any) {
    this.logger.debug(`handleWebHook >> ${JSON.stringify(data)}`);
    const channelAccesToken = `rJy6lbM9+tfh/HhkVVdXZKbWw9vpN+94ih8Ue5ev1rCm7phnzFRq9E7nqJw6C62B9HU6K7xAqETo1LoQv5jemyDFPhK1XQ+tFYJexYl6GXsQ0LeDDi6q/NvrusEACVuGZfexLK5G/oYH7bfYlLCPLwdB04t89/1O/w1cDnyilFU=`;
    const channelSecret = `6a855590095e6005a3b5cafb7f98bd76`;

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
