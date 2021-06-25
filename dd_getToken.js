[Script]

http-request ^https:\/\/game\.xiaojukeji\.com\/api\/game\/plant\/watering script-path=https://raw.githubusercontent.com/passerby-b/didi_fruit/main/dd_getToken.js, requires-body=true, timeout=10, tag=获取滴滴token

cron "0 8,12,18 * * *" script-path=https://raw.githubusercontent.com/passerby-b/didi_fruit/main/dd_fruit.js, tag=滴滴橙心果园

hostname = game.xiaojukeji.com
