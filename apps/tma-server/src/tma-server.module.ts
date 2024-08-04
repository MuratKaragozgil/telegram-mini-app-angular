import { Logger, Module } from '@nestjs/common';
import { TmaServerController } from './tma-server.controller';
import { TmaServerService } from './tma-server.service';
import { GrammyService } from './grammy/grammy.service';
import { Bot, Context, session, SessionFlavor } from 'grammy';
import { I18n, I18nFlavor } from '@grammyjs/i18n';
import { parseMode } from '@grammyjs/parse-mode';

export type MyContext = Context & I18nFlavor;

const logger = new Logger('GrammyModule');

@Module({
  imports: [],
  controllers: [TmaServerController],
  providers: [
    TmaServerService,
    GrammyService,
    {
      provide: 'TELEGRAM_BOT',
      useFactory: async (): Promise<Bot<MyContext>> => {
        interface SessionData {
          __language_code?: string;
        }

        type MyContext = Context & SessionFlavor<SessionData> & I18nFlavor;

        const bot = new Bot<MyContext>(
          '7223091664:AAEjh_2jev0aiPGPUle65TuL6Ei8nJgat0E',
        );

        const i18n = new I18n<MyContext>({
          defaultLocale: 'en',
          useSession: true, // whether to store user language in session
          directory: 'locales', // Load all translation files from locales/.
        });

        bot.api.getMe().then((me) => {
          logger.log(`Bot @${me.username} is up and running!`);
        });

        bot.api.config.use(parseMode('HTML'));

        // Remember to register `session` middleware before
        // registering middleware of the i18n instance.
        bot.use(
          session({
            initial: () => {
              return {};
            },
          }),
        );

        // Register i18n middleware
        bot.use(i18n);

        bot.start();
        return bot;
      },
    },
  ],
})
export class TmaServerModule {}
