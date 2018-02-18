module.exports = {
	id: "mt",
	load: () => {},
	execute: (call) => {
		let rolename = call.params.readParameter(" ").toLowerCase();
		const prefixes = ["", "-g- ", "[f] ", "[c] "];
		console.log(call.message.member.roles.array())
		if(["414603140399366145", "414605974205235201"]
			.some(r => {return call.message.member.roles.array()
				.indexOf(r) !== -1;})) {
			for (const prefix of prefixes) {
				let role = call.message.guild.roles.find(r=> r.name.toLowerCase() === prefix+rolename);
				if(role) role.setMentionable(!role.mentionable);}
		} else {
			call.message.channel.send(`${call.message.author}, you do not have permission to use this command!`);
		}
		call.message.delete();
	}
};
