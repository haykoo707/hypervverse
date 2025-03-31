import telebot
import config
import random
from telebot import types

bot = telebot.TeleBot("5294571589:AAG3bzjCbE6EBEIotJjYSP53DkGboK8CV-E")

@bot.callback_query_handler(func=lambda call: call.data in ['good', 'bad', 'good1', 'bad1'])
def callback_inline(call):
try:
if call.message:
if call.data == 'good':
bot.send_message(call.message.chat.id, 'Вот и отличненько ')
elif call.data == 'bad':
bot.send_message(call.message.chat.id, 'Бывает ')
elif call.data == 'good1':
bot.send_message(call.message.chat.id, 'Славненько...')
elif call.data == 'bad1':
bot.send_message(call.message.chat.id, 'Сорян, платки кончились...')

# удаление встроенных кнопок
bot.edit_message_text(chat_id=call.message.chat.id, message_id=call.message.message_id, text=" Как дела?",
reply_markup=['good', 'bad'])
bot.edit_message_text(chat_id=call.message.chat.id, message_id=call.message.message_id,
text="Не пиши такое больше",
reply_markup=['good1', 'bad1'])

# показать оповещение
bot.answer_callback_query(callback_query_id=call.id, show_alert=False,
text="Преобразовано...")

except Exception as e:
print(repr(e))

@bot.message_handler(content_types=['text'])
def get_text_messages(message):
if message.text == "Как дела?":
markup3 = types.InlineKeyboardMarkup(row_width=2)
item1 = types.InlineKeyboardButton("Хорошо", callback_data='good')
item2 = types.InlineKeyboardButton("Не очень", callback_data='bad')

markup3.add(item1, item2)

bot.send_message(message.chat.id, text='Отлично, сам(-а) как?', reply_markup=markup3)

if message.text == "Люблю тебя":
markup4 = types.InlineKeyboardMarkup(row_width=2)
item1 = types.InlineKeyboardButton("Уйти...", callback_data='good1')
item2 = types.InlineKeyboardButton("Вытереть слезки", callback_data='bad1')

markup4.add(item1, item2)

bot.send_message(message.chat.id, text='Выбрать действие:', reply_markup=markup4)

bot.polling(none_stop=True, interval=0)