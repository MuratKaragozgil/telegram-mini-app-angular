import { Inject, Injectable, Logger } from '@nestjs/common';
import { Bot, InputFile } from 'grammy';
import { MyContext } from '../tma-server.module';

@Injectable()
export class GrammyService {
  private readonly logger = new Logger(GrammyService.name);

  constructor(@Inject('TELEGRAM_BOT') private _bot: Bot<MyContext>) {
    this._bot.api.setMyCommands([{ command: 'start', description: 'Play' }]);

    this._bot.command('start', (ctx) => {
      ctx
        .replyWithPhoto(
          'https://plus.unsplash.com/premium_photo-1663954130790-e85da8e5539c?q=80&w=1641&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          {
            caption: ctx.t('start', {
              name: ctx.from.first_name,
            }),
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: ctx.t('play'),
                    web_app: {
                      url: 'https://d99b-95-70-178-92.ngrok-free.app',
                    },
                  },
                ],
                [
                  {
                    text: ctx.t('join_community'),
                    url: 'https://discord.com/invite/fj2GKNutdk',
                  },
                ],
              ],
            },
          },
        )
        .then(() => {
          this.logger.log('Start command executed', ctx.from.id);
          ctx.api.sendMessage(
            740651254,
            ctx.t('member_started_the_bot', { name: ctx.from.first_name }),
            {
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: ctx.t('admin_dm_buyer'),
                      url: `tg://user?id=${ctx.from.id}`,
                    },
                  ],
                ],
              },
            },
          );
        });
    });
  }
}
