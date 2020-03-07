exports.run=(client,message)=>{
	if(!client.admins[message.author.id]){
		message.channel.send('Sorry, this command can only be used by the bot admins');
		return;
	}
	message.channel.send('It works');
}
