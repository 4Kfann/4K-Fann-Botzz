/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6289668070504', '4K FANN BOTZ, true],
  ['6289668070504']
] // Nomor Owner

global.mods = ['6289668070504'] 
global.prems = ['6289668070504', '6289668070504']

// apikey
global.lann = 'apikeylu'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.betabotz.org': 'apikeylu'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = '4K FANN BOTZ' // nama owner
global.nomor = '6289668070504' // nomor owner
global.nans = '4K FANN BOTZ' // nama bot 
global.thumb = 'https://i.ibb.co/m9YqsDr/neromdv3-2.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com/BdwREb0DY2X0bq9DOOousJ' // link group yang ada di menu

// Sticker wm
global.packname = '4K FANN┃ᴮᴼᵀ' 
global.author = '4K FANN' 
global.fgig = 'https://www.instagram.com/fannovtt' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/nanzone' // bebas tapi jangan kosong
global.fgyt = 'https://nansoffc.my.id/' // bebas tapi jangan kosong
global.fgpyp = 'https://nansoffc.my.id' // bebas tapi jangan kosong
global.fglog = 'https://i.ibb.co/kXw4XhL/nansoffc-logo.jpg'

// Other
global.dana = '6285604193561'
global.qris = ''
global.web = 'https://nansoffc.my.id'
global.email = 'nansoffc@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ ɴᴀɴꜱ ᴏꜰꜰᴄ'

global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})