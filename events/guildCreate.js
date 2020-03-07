module.exports=(client)=>{
	client.user.setActivity(`${client.config.prefix}h | ${client.guilds.size} servers`);
}
