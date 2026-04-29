module.exports = {
    config: {
        name: "start",
        version: "2.4.0",
        author: "MOHAMMAD-BADOL",
        countDown: 5,
        role: 0,
        description: "বটের মেইন মেনু (শুধুমাত্র টেক্সট)",
        category: "System",
        guide: "{pn}",
        prefix: true
    },

    run: async (bot, msg, args) => {
        const { chat, from } = msg;

        try {
            if (!from) return;

            const botInfo = await bot.getMe();
            // নাম থেকে স্পেশাল ক্যারেক্টার ফিল্টার করা যাতে HTML এরর না আসে
            const firstName = from.first_name.replace(/[<>]/g, '');

            // --- ওয়েলকাম মেসেজ ডিজাইন ---
            const welcomeMsg = 
`✨ <b>স্বাগতম, ${firstName}!</b> ✨
━━━━━━━━━━━━━━━━━━
আমি <b>${botInfo.first_name}</b>, আপনার টেলিগ্রাম অভিজ্ঞতাকে সহজ করতে আমি প্রস্তুত।

🚀 <b>কমান্ড লিস্ট দেখতে:</b> /help টাইপ করুন।

নিচের বাটনগুলো ব্যবহার করে আমাদের সাথে যুক্ত থাকুন।
━━━━━━━━━━━━━━━━━━`;

            const menuButtons = {
                parse_mode: "HTML",
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "➕ Add to Group", url: https://t.me/${botInfo.username}?startgroup=true },
                            { text: "📢 Add to Channel", url: https://t.me/${botInfo.username}?startchannel=true }
                        ],
                        [{ text: "🛡️ MCS SUPPORT GROUP", url: "https://t.me/mcssupport" }],
                        [{ text: "🎨 MB EDITOR ZONE", url: "https://t.me/mreditorzone" }],
                        [{ text: "🤖 BADOL BOT GC", url: "https://t.me/BADOLBOTGC" }]
                    ]
                }
            };

            // সরাসরি টেক্সট মেসেজ পাঠানো
            await bot.sendMessage(chat.id, welcomeMsg, menuButtons);

        } catch (error) {
            console.error("Start command error:", error.message);
        }
    }
};