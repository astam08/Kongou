const Handler = require('../modules/commandhandler.js');

class Reboot extends Handler {
    constructor(Kongou) {
    	super(Kongou, {
    		name: 'reboot',
    		usage: 'Reboots Kongou...',
    		category: 'Misc',
    		level: 5
    	});
    };

    async run(msg) {
    	await msg.channel.createMessage(`Ok Bot akan restart Ulang ♪`);
        process.exit();
    };
}

module.exports = Reboot;
